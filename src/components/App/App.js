import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import { Route } from 'react-router-dom';
import './App.css';
import StatePicker from '../StatePicker/StatePicker';


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
          <NavBar />
        </header>
        <StatePicker />
      </div>
    );
  }
}

export default App;
