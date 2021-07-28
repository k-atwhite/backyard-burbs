import React, { useContext } from "react";
import "./Bird.css";
import { Link } from "react-router-dom";
import { getImages } from '../../apiCalls';
import ThemeContext from "../ThemeContext";

const Bird = ({ commonName, scientificName, id }) => {
  const value = useContext(ThemeContext);
  getImages(commonName)
    .then(data => console.log(data))
  return (
    <Link to={`/birds/${id}`}>
      <div className={`bird-card ${value}`}>
        <h3>{commonName}</h3>
        <p>{scientificName}</p>
      </div>
    </Link>
  );
};

export default Bird;
