import React from "react";
import "./Bird.css";
import { Link } from 'react-router-dom';

const Bird = ({ commonName, scientificName, id }) => {
  return (
    <Link to={`/birds/${id}`}>
      <div className="bird-card">
        <h3>{commonName}</h3>
        <p>{scientificName}</p>
      </div>
    </Link>
    
  );
};

export default Bird;
// onClick={() => seeBird(id)}
