import React from "react";
import "./contact.css";
import { useDarkMode } from "../../context/DarkModeContext";
import { motion } from "framer-motion";
import messenger from "../../assets/messenger.png"
import whatsapp from "../../assets/whatsapp.png"
import gmail from "../../assets/gmail.png"

const Contact = () => {
  const { darkMode } = useDarkMode();
  return (
    <section
      className={`contact section ${darkMode ? "dark-theme" : ""}`}
      id="contact"
    >
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">
        <span style={{ color: "#F7AB04" }}>Contact</span> Me
      </span>
      <div className="contact__container">
        <h3 className="contact__title">Talk to me </h3>
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="contact__info"
        >
          <div className="contact__card">
            {/* <i className="bx bx-mail-send contact__card-icon"></i> */}
            <img src={gmail} width={40} alt="" />
            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">asadshah1024@gmail.com</span>
            <a
              href="mailto:asadshah1024@gmail.com.com"
              className="contact__button"
            >
              Write me{""}
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
          <div className="contact__card">
            {/* <i className="bx bxl-whatsapp contact__card-icon"></i> */}
            <img src={whatsapp} width={40} alt="" />
            <h3 className="contact__card-title">Whatsapp</h3>
            <span className="contact__card-data">+923040630451</span>
            <a
              href="https://wa.me/+923040630451"
              target="_blank"
              className="contact__button"
              rel="noreferrer"
            >
              Write me{""}
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
          <div className="contact__card">
            {/* <i className="bx bxl-messenger contact__card-icon"></i> */}
            <img src={messenger} width={40} alt="" />
            <h3 className="contact__card-title">Messenger</h3>
            <span className="contact__card-data"></span>
            <a
              href="https://m.me/100017577317137"
              rel="noreferrer"
              className="contact__button"
              target="_blank"
            >
              Write me{""}
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
