import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'>Choose State</NavLink>
      <NavLink to='/birds'>List of Birds</NavLink>
      <NavLink to='/seen'>Birds Seen</NavLink>
    </nav>
  )
}

export default NavBar;
