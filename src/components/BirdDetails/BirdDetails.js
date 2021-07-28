import "./BirdDetails.css";
import binoculars from "../../binoculars.svg";
import { Link } from "react-router-dom";
import { useState } from 'react';

const BirdDetails = ({ bird, addBird }) => {
  const [newBird, setNewBird] = useState(bird);

  return (
    <div className="bird-detail">
      <h3>{bird.comName}</h3>
      <p>{bird.sciName}</p>
      <p>Last seen on: {bird.obsDt}</p>
      <p>How many? {bird.howMany}</p>
      <Link to="/myBirds">
        <img
          className="binoculars"
          src={binoculars}
          alt="binoculars"
          onClick={() => addBird(newBird)}
        />
      </Link>
    </div>
  );
};

export default BirdDetails;
