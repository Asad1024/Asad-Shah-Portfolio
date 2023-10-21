import React, { useState } from "react";
import "./Header.css";
import dev from "../../assets/dev.png";
import { useDarkMode } from "../../context/DarkModeContext";
import Lottie from "lottie-react";
import sun from "../../assets/Skills/sun.json";
import moon from "../../assets/Skills/moon.json";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className={`header ${darkMode ? "dark-theme" : ""}`}>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Asad
          <img src={dev} width={30} alt="" />
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link "
                  }
                >
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about"
                      ? "nav__link active-link"
                      : "nav__link "
                  }
                >
                  About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills"
                      ? "nav__link active-link"
                      : "nav__link "
                  }
                >
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#services"
                  onClick={() => setActiveNav("#services")}
                  className={
                    activeNav === "#services"
                      ? "nav__link active-link"
                      : "nav__link "
                  }
                >
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#projects"
                  onClick={() => setActiveNav("#projects")}
                  className={
                    activeNav === "#portfolio"
                      ? "nav__link active-link"
                      : "nav__link "
                  }
                >
                  Projects
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
          <div
            style={{
              marginTop: "5px",
            }}
            className="sunMoon"
          >
            <span className="toggle-link" onClick={handleDarkModeToggle}>
              {!darkMode ? (
                <Lottie
                  animationData={sun}
                  className="sun"
                  style={{ width: "50px" }}
                />
              ) : (
                <Lottie
                  animationData={moon}
                  className="moon"
                  style={{ width: "55px" }}
                />
              )}
            </span>
          </div>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
