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
    const photoUrl = 'https://live.staticflickr.com/' + photo.server + '/' +
      photo.id + '_' + photo.secret + '_b.jpg';

      return photoUrl;
  }

  getImages(bird.sciName, 3)
    .then(data => {
      if(!photos.length) {
        const url = data.photos.photo.map(photo => {
          return createURL(photo)
        })
        setPhotos(url)
      }

    })

  return (
    <div className="bird-detail">
      <img src={photos[0]} width='300px'/>
      <img src={photos[1]} width='300px'/>
      <img src={photos[2]} width='300px'/>
      <h3>{bird.comName}</h3>
      <p>{bird.sciName}</p>
      <p>Last seen on: {bird.obsDt}</p>
      <p>How many? {bird.howMany}</p>
      <Link to="/myBirds">
        <div onClick={() => addBird(newBird)}>
          <img className="binoculars" src={binoculars} alt="binoculars" />
          <p>I see it!</p>
        </div>
      </Link>
    </div>
  );
};

export default BirdDetails;
