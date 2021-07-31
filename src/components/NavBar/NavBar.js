import "./NavBar.css";
import { NavLink } from "react-router-dom";
import ThemeContext from "../ThemeContext";
import React, { useContext } from "react";

const NavBar = ({ birdData }) => {
  const { theme } = useContext(ThemeContext);

  const hideList = () => {
    if (!birdData.length) {
      return "hidden";
    }
  };
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className={`nav-link ${theme}-text`}
        activeClassName="selected-link"
      >
        Choose State
      </NavLink>
      <NavLink
        to="/birds"
        className={`nav-link ${theme}-text ${hideList()}`}
        activeClassName="selected-link"
      >
        List of Birds
      </NavLink>
      <NavLink
        to="/myBirds"
        className={`nav-link ${theme}-text`}
        activeClassName="selected-link"
      >
        My Birds
      </NavLink>
    </nav>
  );
};

export default NavBar;
