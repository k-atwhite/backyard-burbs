import React, { Component } from 'react';
import './StatePicker.css';

class StatePicker extends Component {
  constructor() {
    super();
    this.state = {
      value:'Alabama'
    }
  }
  handleChange = (event) => {
    this.setState({value: event.target.value})
  } 

  render() {
    return (
      <form className= 'dropdown'>
        <label>
          Select your state:
          <select value={this.state.value} onChange={this.handleChange}>

          </select>
        </label>
      </form>
    )
  }
}

export default StatePicker;

