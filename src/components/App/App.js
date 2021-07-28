import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import StatePicker from "../StatePicker/StatePicker";
import BirdList from "../BirdList/BirdList";
import { getBirds } from "../../apiCalls";
import BirdDetails from "../BirdDetails/BirdDetails";
import MyBirds from "../MyBirds/MyBirds";

class App extends Component {
  constructor() {
    super();
    this.state = {
      regionBirds: [],
      myBird: {},
    };
  }

  setBirds = (stateAbv) => {
    getBirds(stateAbv).then((data) => this.setState({ regionBirds: data }));
  };

  clearBirds = () => {
    this.setState({ regionBirds: [] });
  };

  addBird = (seenBird) => {
    this.setState({ myBird: seenBird });
  };

  render() {
    const loadingMsg = !this.state.regionBirds.length && (
      <h2>Loading your birds...</h2>
    );

    return (
      <div className="App">
        <header className="App-header">
          <p>Backyard Burbs</p>
          <NavBar />
        </header>
        <Switch>
          <Route
            path="/birds/:id"
            render={({ match }) => {
              const bird = this.state.regionBirds.find(
                (bird) => bird.speciesCode === match.params.id
              );

              if (!bird) {
                return <h2>That bird doesn't exist!</h2>;
              }
              return <BirdDetails bird={bird} addBird={this.addBird} />;
            }}
          ></Route>
          <Route path="/birds">
            {loadingMsg}
            <BirdList birdData={this.state.regionBirds} />
          </Route>
          <Route path="/myBirds">
            <MyBirds />
          </Route>
          <Route path="/">
            <StatePicker
              setBirds={this.setBirds}
              clearBirds={this.clearBirds}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
