import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <p className="center">Testimonial</p>
      <h1>
        WHAT OUR USERS <br /> SAY ABOUT US?
      </h1>
      <div className="about-container">
        <div className="left-container">
          <img className="rear-img" src="src/assets/Aboutimg.png" alt="User's testimonial background" />
          <img className="bg-img" src="src/assets/bgcolordrop.png" alt="Color drop background" />
        </div>
        <div className="right-container">
          <h2>
            The Best Financial <br />
            App Ever!
          </h2>
          <p>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <div className="user-info">
            <img src="src/assets/user-avatar.png" alt="User Avatar" className="user-avatar" />
            <span className="user-name">Nick Jonas</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
