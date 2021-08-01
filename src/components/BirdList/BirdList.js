import React from "react";
import "./BirdList.css";
import Bird from "../Bird/Bird";
import PropTypes from "prop-types";

const BirdList = ({ birdData }) => {
  const regionalBirds = birdData.map((bird) => {
    if (!bird.comName.includes("hybrid")) {
      return (
        <Bird
          commonName={bird.comName}
          scientificName={bird.sciName}
          id={bird.speciesCode}
          key={bird.speciesCode}
        />
      );
    }
  });

  return <section className="birds-container">{regionalBirds}</section>;
};

export default BirdList;

BirdList.propTypes = {
  birdData: PropTypes.array
};
