import React from "react";
import sass from "../../assets/Skills/sass.png";
import framer from "../../assets/Skills/framermotion.png";
import mui from "../../assets/Skills/material.png";
import tailwind from "../../assets/Skills/tailwind.png";
import bootstrap from "../../assets/Skills/bootstrap.png";
import figma from "../../assets/Skills/figma.png";

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">UI Frameworks</h3>
    <div className="skills__box">
      <div className="skills__group">
        <div className="skills__data">
          <img src={tailwind} width={45} alt="" />
          <div>
            <h3 className="skills__name">Tailwind</h3>
            
          </div>
        </div>
        <div className="skills__data">
          <img src={bootstrap} width={45} alt="" />
          <div>
            <h3 className="skills__name">Bootstrap</h3>
          </div>
        </div>
        <div className="skills__data">
          <img src={mui} width={45} alt="" />
          <div>
            <h3 className="skills__name">MUI</h3>
         
          </div>
        </div>
      </div>
      <div className="skills__group">
        <div className="skills__data">
          <img src={figma} width={45} alt="" />
          <div>
            <h3 className="skills__name">Figma</h3>
           
          </div>
        </div>
        <div className="skills__data">
          <img src={sass} width={45} alt="" />
          <div>
            <h3 className="skills__name">Sass</h3>
          
          </div>
        </div>
        <div className="skills__data">
          <img src={framer} width={45} alt="" />
          <div>
            <h3 className="skills__name">Motion</h3>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Backend;