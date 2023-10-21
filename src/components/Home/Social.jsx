import React from "react";
import {motion} from "framer-motion"
import linkedin from "../../assets/Skills/link.png"
import github from "../../assets/Skills/github.png"

export const Social = () => {
  return (
    <motion.div 
      initial={{
        x: -500,
        opacity:0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration:1.5
      }}
    className="home__social">
      <a
        href="https://github.com/Asad1024"
        rel="noreferrer"
        className="home__social-icon"
        target="_blank"
      >
        <img src={github} width={37} className="github" alt="" />
      </a>
      <a
        href="https://www.linkedin.com/in/asad-shah-42604b1a5/"
        rel="noreferrer"
        className="home__social-icon"
        target="_blank"
      >
        <img src={linkedin} width={37} className="linkedin" alt="" />
      </a>
    </motion.div>
  );
};
