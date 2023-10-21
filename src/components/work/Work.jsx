import React from "react";
import "./work.css";
import Works from "./Works";
import { useDarkMode } from "../../context/DarkModeContext";

const Work = () => {
  const { darkMode } = useDarkMode();
  return (
    <section
      className={`work section ${darkMode ? "dark-theme" : ""}`}
      id="projects"
    >
      <h3 className="section__title">Portfolio</h3>
      <span className="section__subtitle">
        Most <span style={{ color: "#f7AB04" }}>recent</span> work
      </span>
      <Works />
    </section>
  );
};

export default Work;
