import React from "react";
import "./Hero.css";
import groupImage from './iphone0.png';
// import iPhone1 from "/assets/iPhone1.png";
import iPhone2 from "./iPhone2.png";
import iPhone3 from "./iphone3.png";
// import iPhone3 from "/assets/iphone3.png";
import iPhone1 from "./iPhone1.png";
// import logos from "./assets/motionarteffect-img8.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="left-hero">
        <h1>
          Make the Best <br /> Financial Decisions
        </h1>
        <p>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>

        <div className="btn-hero">
          <button>Get Started</button>
          <span>WATCH VIDEO</span>
        </div>
        <img src={groupImage} alt="Group" />
      </div>
      <div className="right-hero">
        <div className="background-container">
          <div className="mobile-container">
            <img src={iPhone1} alt="Mobile 1" className="mobile-image mobile-image-1" />
            <img src={iPhone2} alt="Mobile 2" className="mobile-image mobile-image-2" />
            <img src={iPhone3} alt="Mobile 3" className="mobile-image mobile-image-3" />
          </div>
          <div className="bg-img"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
