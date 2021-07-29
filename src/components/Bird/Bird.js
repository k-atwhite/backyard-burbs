import React, { useContext, useState } from "react";
import "./Bird.css";
import { Link } from "react-router-dom";
import { getImages } from '../../apiCalls';
import ThemeContext from "../ThemeContext";

const Bird = ({ commonName, scientificName, id }) => {
  const value = useContext(ThemeContext);
  const [photos, setPhotos] = useState([]);

  const createURL = (photo) => {
    const photoUrl = 'https://live.staticflickr.com/' + photo.server + '/' +
      photo.id + '_' + photo.secret + '_b.jpg';

    return photoUrl;
  }

  getImages(scientificName, 1)
  .then(data => {
    if (!photos.length) {
      const url = createURL(data.photos.photo[0])
      setPhotos(url)
    }
  });

  return (
    <Link to={`/birds/${id}`}>
      <div
      className={`bird-card ${value}`}
      style={{backgroundImage: `url('${photos}')`}}>
        <h3 className='card-text'>{commonName}</h3>
      </div>
    </Link>
  );
};

export default Bird;
