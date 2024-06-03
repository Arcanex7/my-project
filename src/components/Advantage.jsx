import React from "react";
import "./Advantage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Advantage = () => {
  return (
    <div className="container">
      <div className="left-container">
        <div className="image-container">
          <div className="background-image background-image-1">
            <img src="src/assets/infinity.png" alt="" />
          </div>
          <div className="background-image background-image-2">
            <img src="src/assets/bgcolordrop.png" alt="" />
          </div>
          <img
            src="src/assets/iPhone-13-Pro-Front.png"
            alt="Phone"
            className="phone-image"
          />
        </div>
      </div>
      <div className="right-container">
        <div className="header-with-icon">
          <FontAwesomeIcon icon={faStar} className="icon" />
          <h1>Fully Customisable</h1>
        </div>
        <p>
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam.
        </p>
      </div>
    </div>
  );
};

export default Advantage;
