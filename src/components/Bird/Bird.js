import React from "react";
import "./Bird.css";

const Bird = ({ commonName, scientificName, id }) => {
  return (
    <div className="bird-card">
      <h3>{commonName}</h3>
      <p>{scientificName}</p>
      <button>🔍</button>
    </div>
  );
};

export default Bird;
// onClick={() => seeBird(id)}
