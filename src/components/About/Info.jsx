import React from "react";
import experience from "../../assets/Skills/badge.png"
import completed from "../../assets/Skills/completed.png"
import customer from "../../assets/Skills/customer.png"

const Info = ({darkMode}) => {

  return (
    <div className="about__info grid">
      <div className="about__box">
        {/* <i className="bx bx-award about__icon"></i> */}
        <img src={experience} width={30} alt="" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Year Working</span>
      </div>
      <div className="about__box">
        {/* <i className="bx bx-briefcase-alt about__icon"></i> */}
        <img src={completed} width={30} alt="" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">17+ Projects</span>
      </div>
      <div className="about__box">
        {/* <i className="bx bx-support about__icon"></i> */}
        <img src={customer} width={30} alt="" />
        <h3 className="about__title ">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
