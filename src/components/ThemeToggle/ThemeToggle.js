import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import "./ThemeToggle.css";
import chirp from "./chirp.mp3";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    setTheme(theme === "goldfinch" ? "bluejay" : "goldfinch");
    new Audio(chirp).play();
  };

  return (
    <label className="switch toggle">
      <input type="checkbox" onClick={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default ThemeToggle;
