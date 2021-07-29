import "./BirdDetails.css";
import binoculars from "../../binoculars.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeContext from "../ThemeContext";
import { getImages } from "../../apiCalls";

const BirdDetails = ({ bird, addBird }) => {
  const [newBird, setNewBird] = useState(bird);
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
        <img src={photos[0]} className="bird-detail-image" />
        <img src={photos[1]} className="bird-detail-image" />
        <img src={photos[2]} className="bird-detail-image" />
      </div>
      <div className="bird-details">
        <div className="bird-words">
          <h3>Common Name: {bird.comName}</h3>
          <p>Scientific Name: {bird.sciName}</p>
          <p>Last seen on: {bird.obsDt}</p>
          <p>How many? {bird.howMany}</p>
        </div>
        <div className="binoculars-container">
          <Link to="/myBirds">
            <div onClick={() => addBird(newBird)}>
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
