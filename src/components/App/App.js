import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import StatePicker from "../StatePicker/StatePicker";
import BirdList from "../BirdList/BirdList";
import { getBirds } from "../../apiCalls";
import BirdDetails from "../BirdDetails/BirdDetails";
import ThemeContext from "../ThemeContext";
import burb from "../../resources/burb.png";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const App = () => {
  const [regionBirds, setRegionBirds] = useState([]);
  const [myBirds, setMyBirds] = useState([]);
  const [theme, setTheme] = useState("goldfinch");
  const [error, setError] = useState("");

  const setBirds = (stateAbv) => {
    getBirds(stateAbv)
      .then((data) => setRegionBirds(data))
      .catch(() =>
        setError(
          "We're experiencing server technical difficulties, please check back again later!"
        )
      );
  };

  const clearBirds = () => {
    setRegionBirds([]);
  };

  const addBird = (seenBird) => {
    if (!myBirds.includes(seenBird)) {
      setMyBirds([seenBird, ...myBirds]);
    }
  };

  const loadingMsg = !regionBirds.length && !error.length && (
    <h2>Loading your birds...</h2>
  );

  const noMyBirdMsg = !myBirds.length && <h2>GO FIND SOME BIRDS KIDDO!</h2>

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
        <header className={`App-header-${theme}`}>
          <h1>
            Backyard Burbs
            <img src={burb} alt="burb-logo" className="burb-logo" />
          </h1>
          <ThemeToggle />
          <NavBar birdData={regionBirds} />
        </header>
        <Switch>
          <Route
            path="/birds/:id"
            render={({ match }) => {
              const bird = regionBirds.find(
                (bird) => bird.speciesCode === match.params.id
              );

              if (!bird) {
                return <h2>That bird doesn't exist!</h2>;
              }

              return <BirdDetails bird={bird} addBird={addBird} />;
            }}
          ></Route>
          <Route path="/birds">
            {loadingMsg}
            {!!error.length && <h2>{error}</h2>}
            <BirdList birdData={regionBirds} />
          </Route>
          <Route path="/myBirds">
            {noMyBirdMsg}
            <BirdList birdData={myBirds} />
          </Route>
          <Route exact path="/">
            <StatePicker setBirds={setBirds} clearBirds={clearBirds} />
          </Route>
        </Switch>
        <Redirect to={"/"} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
