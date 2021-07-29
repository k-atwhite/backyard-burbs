import "./NavBar.css";
import { NavLink } from "react-router-dom";
import ThemeContext from "../ThemeContext";
import React, { useContext } from "react";
// import ThemeToggle from "../ThemeToggle/ThemeToggle";

const NavBar = () => {
  const value = useContext(ThemeContext);
  return (
    <nav>
      <NavLink to="/" className={`nav-link ${value.theme}`}>
        Choose State
      </NavLink>
      <NavLink to="/birds" className={`nav-link ${value.theme}`}>
        List of Birds
      </NavLink>
      <NavLink to="/myBirds" className={`nav-link ${value.theme}`}>
        My Birds
      </NavLink>
      {/* <ThemeToggle /> */}
    </nav>
  );
};

export default NavBar;
