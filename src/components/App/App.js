import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import StatePicker from "../StatePicker/StatePicker";
import BirdList from "../BirdList/BirdList";
import { getBirds } from "../../apiCalls";
import BirdDetails from "../BirdDetails/BirdDetails";
import MyBirds from "../MyBirds/MyBirds";
import ThemeContext from "./ThemeContext";

const App = () => {
  const [regionBirds, setRegionBirds] = useState([]);
  const [myBirds, setMyBirds] = useState([]);
  const [theme, setTheme] = useState("goldfinch");

  const setBirds = (stateAbv) => {
    getBirds(stateAbv).then((data) => setRegionBirds(data));
  };

  const clearBirds = () => {
    setRegionBirds([]);
  };

  const addBird = (seenBird) => {
    setMyBirds([seenBird, ...myBirds]);
  };

  const toggleTheme = () => {
    const newTheme = theme === "goldfinch" ? "blueJay" : "goldfinch";
    setTheme(newTheme);
  };

  const loadingMsg = !regionBirds.length && <h2>Loading your birds...</h2>;

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <header className="App-header">
          <p>Backyard Burbs</p>
          <NavBar />
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
            <BirdList birdData={regionBirds} />
          </Route>
          <Route path="/myBirds">
            <MyBirds birdData={myBirds} />
          </Route>
          <Route path="/">
            <StatePicker setBirds={setBirds} clearBirds={clearBirds} />
          </Route>
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
