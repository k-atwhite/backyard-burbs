import "./BirdDetails.css";
import binoculars from "../../binoculars.svg";

const BirdDetails = ({ bird }) => {
  return (
    <div className="bird-detail">
      <h3>{bird.comName}</h3>
      <p>{bird.sciName}</p>
      <p>Last seen on: {bird.obsDt}</p>
      <p>How many? {bird.howMany}</p>
      <button>
        <img className="binoculars" src={binoculars} alt="binoculars" />
      </button>
    </div>
  );
};

export default BirdDetails;
