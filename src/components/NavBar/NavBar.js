import "./NavBar.css";
import { NavLink } from "react-router-dom";
import ThemeContext from "../ThemeContext";
import React, { useContext } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const NavBar = () => {
  const value = useContext(ThemeContext);

  return (
    <nav>
      <NavLink to="/">Choose State</NavLink>
      <NavLink to="/birds">List of Birds</NavLink>
      <NavLink to="/seen">My Birds</NavLink>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
