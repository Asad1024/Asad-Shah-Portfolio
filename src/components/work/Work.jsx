import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h3 className="section__title">Portfolio</h3>
      <span className="section__subtitle">Most recent work</span>
      <Works />
    </section>
  );
};

export default Work;
