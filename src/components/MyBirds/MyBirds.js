import Bird from "../Bird/Bird";
import "./MyBirds.css";

const MyBirds = ({ birdData }) => {
  const seenBirds = birdData.map((bird) => {
    return (
      <Bird
        commonName={bird.comName}
        scientificName={bird.sciName}
        id={bird.speciesCode}
        key={bird.speciesCode}
      />
    );
  });
  return <section className="my-birds-container"> {seenBirds}</section>;
};

export default MyBirds;
