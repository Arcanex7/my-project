import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Features.css';

const featuresData = [
  {
    icon: <FaStar />,
    title: 'Budgeting Intervals',
    description: 'Cum Et Convallis Risus Placerat Aliquam, Nunc Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.'
  },
  {
    icon: <FaStar />,
    title: 'Budgeting Intervals',
    description: 'Cum Et Convallis Risus Placerat Aliquam, Nunc Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.'
  },
  {
    icon: <FaStar />,
    title: 'Budgeting Intervals',
    description: 'Cum Et Convallis Risus Placerat Aliquam, Nunc Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.'
  },
];

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-img-left">
        <img className="bg-img" src="src/assets/infinity.png" alt="" />
        <img className="bg-img" src="src/assets/bgcolordrop.png" alt="" />
        <img className="iphone-img" src="src/assets/iPhone-13-Pro-Front.png" alt="" />
      </div>
      <div className="feature-content-right">
        <h5>Features</h5>
        <h2 className="features-title">UIFRY Premium</h2>
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
