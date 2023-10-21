import React from "react";
import "./footer.css";
import { useDarkMode } from "../../context/DarkModeContext";
import dev from "../../assets/dev.png";

const Footer = () => {
  const { darkMode } = useDarkMode();
  return (
    <footer
      className={`footer section ${darkMode ? "dark-theme" : ""}`}
      id="footer"
    >
      <div className="footer__container container">
        <a href="#home">
          <h1 className="footer__title" style={{ color: "#F7AB04" }}>
            Asad
          </h1>
          <img src={dev} style={{ marginBottom: "35px" }} alt="" />
        </a>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/Asad1024"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/asad-shah-42604b1a5/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Copyright. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
