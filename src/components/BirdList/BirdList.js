import React from "react";
import "./BirdList.css";
import Bird from "../Bird/Bird";

const BirdList = ({ matchedStateListOfBurbs }) => {
  const regionalBirds = birds.map((bird) => {
    return (
      <Bird
        commonName={bird.commonName}
        scientificName={bird.scientificName}
        id={bird.id}
        key={bird.id}
      />
    );
  });

  return <div className="birds-container">{regionalBirds}</div>;
};

export default BirdList;
