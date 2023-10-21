import React from "react";
import react from "../../assets/Skills/react.png";
import next from "../../assets/Skills/next.png";
import mongodb from "../../assets/Skills/mongodb.png";
import javascript from "../../assets/Skills/javascript.png";
import firebase from "../../assets/Skills/firebase.png";
import redux from "../../assets/Skills/redux.png";
import { motion } from "framer-motion";

const Frontend = () => {
  return (
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
      className="skills__content"
    >
      <h3 className="skills__title">Tech Stack</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img src={react} width={45} alt="" />
            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>
          <div className="skills__data">
            <img src={javascript} width={45} alt="" />
            <div>
              <h3 className="skills__name">JavaScript</h3>
            </div>
          </div>
          <div className="skills__data">
            <img src={firebase} width={45} alt="" />
            <div>
              <h3 className="skills__name">Firebase</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <img src={next} width={45} alt="" />
            <div>
              <h3 className="skills__name">Next</h3>
            </div>
          </div>
          <div className="skills__data">
            <img src={mongodb} width={45} alt="" />
            <div>
              <h3 className="skills__name">MongoDb</h3>
            </div>
          </div>
          <div className="skills__data">
            <img src={redux} width={45} alt="" />
            <div>
              <h3 className="skills__name">Redux</h3>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Frontend;
