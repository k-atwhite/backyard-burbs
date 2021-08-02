import React, { useContext, useState } from "react";
import "./Bird.css";
import { Link } from "react-router-dom";
import { getImages } from '../../apiCalls';
import ThemeContext from "../ThemeContext";
import PropTypes from "prop-types";
import noImgBurb from "../../resources/no-img-burb.png"

const Bird = ({ commonName, scientificName, id }) => {
  const { theme } = useContext(ThemeContext);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState('');

  const createURL = (photo) => {
    let photoURL;

    if (photo) {
      photoURL = 'https://live.staticflickr.com/' + photo.server + '/' +
      photo.id + '_' + photo.secret + '_b.jpg';
    } else {
      photoURL = noImgBurb;
    }

    return photoURL;
  }

  getImages(scientificName, 1)
  .then(data => {
    if (!photos.length) {
      const url = createURL(data.photos.photo[0])
      setPhotos(url)
    }
  })
  .catch(() => setError("Please try again later!"))
  ;

  return (
    <Link to={`/birds/${id}`}>
      {!!error.length &&
            <h2>{error}</h2>}
      <div
      id={`${id}`}
      className={`bird-card`}
      style={{backgroundImage: `url('${photos}')`}}>
        <h3 className={`card-text ${theme}`}>{commonName}</h3>
      </div>
    </Link>
  );
};

export default Bird;

Bird.propTypes = {
  commonName: PropTypes.string,
  scientificName: PropTypes.string,
  id: PropTypes.string
}
