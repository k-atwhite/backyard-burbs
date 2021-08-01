import "./BirdDetails.css";
import binoculars from "../../resources/binoculars.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getImages } from "../../apiCalls";
import PropTypes from 'prop-types';

const BirdDetails = ({ bird, addBird }) => {
  const [newBird] = useState(bird);
  const [photos, setPhotos] = useState([]);

  const createURL = (photo) => {
    const photoUrl =
      "https://live.staticflickr.com/" +
      photo.server +
      "/" +
      photo.id +
      "_" +
      photo.secret +
      "_b.jpg";

    return photoUrl;
  };

  getImages(bird.sciName, 3).then((data) => {
    if (!photos.length) {
      const url = data.photos.photo.map((photo) => {
        return createURL(photo);
      });
      setPhotos(url);
    }
  });

  return (
    <div className="bird-detail-container">
      <div className="bird-detail-images">
        <img
          src={photos[0]}
          alt={`${bird.comName} 1`}
          className="bird-detail-image"
        />
        <img
          src={photos[1]}
          alt={`${bird.comName} 2`}
          className="bird-detail-image"
        />
        <img
          src={photos[2]}
          alt={`${bird.comName} 3`}
          className="bird-detail-image"
        />
      </div>
      <div className="bird-details">
        <div className="bird-words">
          <p>
            <strong>Common Name:</strong> {bird.comName}
          </p>
          <p>
            <strong>Scientific Name:</strong> {bird.sciName}
          </p>
          <p>
            <strong>Last seen on: </strong>
            {bird.obsDt}
          </p>
          <p>
            <strong>How many?</strong> {bird.howMany} !
          </p>
        </div>
        <div className="binoculars-container">
          <Link to="/myBirds">
            <div className ="i-see-it" onClick={() => addBird(newBird)}>
              <img className="binoculars" src={binoculars} alt="binoculars" />
              <p className="binoc-text">I see it!</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BirdDetails;

BirdDetails.propTypes = {
  bird: PropTypes.object,
  addBird: PropTypes.func
}
