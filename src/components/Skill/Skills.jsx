import React from "react";
import Frontend from "./Frontend";
import "./skills.css";
import { useDarkMode } from "../../context/DarkModeContext";
import Backend from "./Backend";

const Skills = () => {
  const { darkMode } = useDarkMode();
  return (
    <section
      className={`skills section ${darkMode ? "dark-theme" : ""}`}
      id="skills"
    >
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">
        My <span style={{ color: "#F7AB04" }}>Technical</span> level
      </span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend/>
      </div>
    </section>
  );
};

export default Skills;
