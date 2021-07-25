import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Backyard Burbs</p>
          <USAMap />
        </header>
      </div>
    );
  } 
}

export default App;
