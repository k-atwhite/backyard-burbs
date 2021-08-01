import { Link } from 'react-router-dom';
import './StatePicker.css';
import USAMap from 'react-usa-map';
import PropTypes from "prop-types";

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

StatePicker.propTypes = {
  setBirds: PropTypes.func,
  clearBirds: PropTypes.func
}
