import React from "react";
import "./BirdList.css";
import Bird from "../Bird/Bird";

const BirdList = ({ birdData }) => {
  const regionalBirds = birdData.map(bird => {
    return (
      <Bird
        commonName={bird.comName}
        scientificName={bird.sciName}
        id={bird.speciesCode}
        key={bird.speciesCode}
      />
    );
  });

  return (
    <section className="birds-container">
      {regionalBirds}
    </section>
  );
};

export default BirdList;
