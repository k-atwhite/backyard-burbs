import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'>Choose State</NavLink>
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/seen'>Birds Seen</NavLink>
    </nav>
  )
}

export default NavBar;
