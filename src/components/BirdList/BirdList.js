import React from "react";
import "./BirdList.css";
import Bird from "../Bird/Bird";
import PropTypes from "prop-types";

const BirdList = ({ birdData }) => {
  const regionalBirds = birdData.reduce((filteredBirds, bird) => {
    const currentBird = <Bird
      commonName={bird.comName}
      scientificName={bird.sciName}
      id={bird.speciesCode}
      key={bird.speciesCode}
    />;

    if (!bird.comName.includes("hybrid")) {
      filteredBirds.push(currentBird);
    }

    return filteredBirds;
  }, []);

  return <section className="birds-container">{regionalBirds}</section>;
};

export default BirdList;

BirdList.propTypes = {
  birdData: PropTypes.array
};
