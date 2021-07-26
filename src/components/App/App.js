import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import StatePicker from '../StatePicker/StatePicker';
import BirdList from '../BirdList/BirdList';
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
        <Switch>
          <Route path='/birds'>
            <BirdList birdData={this.state.regionBirds}/>
          </Route>
          <Route path='/'>
            <StatePicker setBirds = {this.setBirds}/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
