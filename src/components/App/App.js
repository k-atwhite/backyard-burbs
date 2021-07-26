import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import { Route } from 'react-router-dom';
import './App.css';
import StatePicker from '../StatePicker/StatePicker';
import { getBirds } from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      regionBirds: []
    }
  }
  
  setBirds = (stateAbv) => {
    getBirds(stateAbv).then(data => this.setState({regionBirds: data}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Backyard Burbs</p>
          <NavBar />
        </header>
        <StatePicker selectState = {this.selectState} setBirds = {this.setBirds}/>
      </div>
    );
  }
}

export default App;
