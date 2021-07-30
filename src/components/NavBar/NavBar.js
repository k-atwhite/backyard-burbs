import "./NavBar.css";
import { NavLink } from "react-router-dom";
import ThemeContext from "../ThemeContext";
import React, { useContext } from "react";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav>
      <NavLink to="/" className={`nav-link ${theme}-text`}>
        Choose State
      </NavLink>
      <NavLink to="/birds" className={`nav-link ${theme}-text`}>
        List of Birds
      </NavLink>
      <NavLink to="/myBirds" className={`nav-link ${theme}-text`}>
        My Birds
      </NavLink>
    </nav>
  );
};

export default NavBar;
