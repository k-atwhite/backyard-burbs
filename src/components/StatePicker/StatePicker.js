import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StatePicker.css';
import USAMap from 'react-usa-map';

const StatePicker = (props) => {
  const handleChange = (event) => {
    props.clearBirds()
    props.setBirds(event.target.dataset.name);
  }

    return (
      <Link to='/birds'>
        <USAMap onClick={handleChange}/>
      </Link>
    )
}

export default StatePicker;
