import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import StatePicker from '../StatePicker/StatePicker';
import BirdList from '../BirdList/BirdList';
import { getBirds } from '../../apiCalls';
import BirdDetails from '../BirdDetails/BirdDetails';

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

  clearBirds = () => {
    this.setState({ regionBirds: [] });
  }

  render() {
    const loadingMsg = !this.state.regionBirds.length && <h2>Loading your birds...</h2>;

    return (
      <div className="App">
        <header className="App-header">
          <p>Backyard Burbs</p>
          <NavBar />
        </header>
        <Switch>
          <Route path='/birds/:id' render={({ match }) => {
            const bird = this.state.regionBirds.find(bird => bird.speciesCode === match.params.id)

            if(!bird) {
              return (<div>That bird doesn't exist!</div>)
            }
            return <BirdDetails bird = {bird} />
          }}>
            
          </Route>
          <Route path='/birds'>
            {loadingMsg}
            <BirdList birdData={this.state.regionBirds}/>
          </Route>
          <Route path='/'>
            <StatePicker setBirds = {this.setBirds} clearBirds={this.clearBirds}/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
