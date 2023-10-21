import React from "react";
import { Social } from "./Social";
import Data from "./Data";
import "./Home.css";
import ScrollDown from "./ScrollDown";
import { useDarkMode } from "../../context/DarkModeContext";
const Home = () => {
  const { darkMode} = useDarkMode();
  return (
    <section className={`home section ${darkMode ? "dark-theme" : ""}`} id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data darkMode={darkMode} />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
