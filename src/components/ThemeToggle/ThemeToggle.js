import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    setTheme(theme === "goldfinch" ? "bluejay" : "goldfinch");
  };

  return (
    <label className="switch">
      <input type="checkbox" onClick={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default ThemeToggle;
