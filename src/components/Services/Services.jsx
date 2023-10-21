import React from "react";
import { useState } from "react";
import "./Services.css";
import { useDarkMode } from "../../context/DarkModeContext";
import { motion } from "framer-motion";

const Services = () => {
  const { darkMode } = useDarkMode();
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section
      className={`services section ${darkMode ? "dark-theme" : ""}`}
      id="services"
    >
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">
        <span style={{ color: "#F7AB04" }}>What</span> i offer
      </span>
      <div className="services__container container grid">
        <motion.div
          initial={{
            y: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true}}
          className="services__content"
        >
          <div>
            <i
              className="uil uil-arrow services__icon"
              style={{ color: "#F7AB04" }}
            ></i>
            <h3 className="services__title">
              Web <br /> Development
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            <span style={{ color: "#F7AB04" }}>View</span> More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">
                Web <br /> Development
              </h3>
              <p className="services__modal-description">
                Service with more than 1 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    User Interface Design: Creating engaging and intuitive
                    interfaces.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Web Development: Building modern, responsive web pages.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Developing robust backends using Sanity and Firebase.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    MERN Stack Development: Proficient in developing web
                    applications using the MERN stack.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <div className="services__content">
          <div>
            <i
              className="uil uil-image-resize-landscape services__icon"
              style={{ color: "#F7AB04" }}
            ></i>
            <h3 className="services__title">
              Graphic <br /> Designing
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            <span style={{ color: "#F7AB04" }}>View</span> More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">
                Graphic <br /> Designing
              </h3>
              <p className="services__modal-description">
                Service with more than 1 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Creating high-quality vector graphics in software like Adobe
                    Illustrator.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Crafting unique, memorable logos representing brand
                    identities.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Designing captivating book covers for publications.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Designing professional, visually appealing business cards.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
