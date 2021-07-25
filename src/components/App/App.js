import React, { Component } from 'react';
import USAMap from "react-usa-map";
import NavBar from '../NavBar/NavBar';
import { Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Backyard Burbs</p>
          <NavBar />
          <USAMap onClick={this.mapHandler}/>
        </header>
      </div>
    );
  }
}

export default App;
