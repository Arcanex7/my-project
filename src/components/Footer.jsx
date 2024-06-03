import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="image-container">
        <img className="rear-img" src="src/assets/Frame.png" alt="image" />
        <img className="bg-img" src="src/assets/bgcolordrop.png" alt="background" />
      </div>
      <div className="footer-container">
        <div className="info footer-section">
          <div className="info-container">
            <img src="src/assets/Logo.png" alt="" /> <span>uiFry</span>
          </div>
          <ul>
            <li>help@frybix.com</li>
            <li>+1 234 456 678 89</li>
          </ul>
        </div>
        <div className="footer-headings">
          <div className="links footer-section">
            <ul>
              <h1>Links</h1>
              <li>Home</li>
              <li>About Us</li>
              <li>Bookings</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="legal footer-section">
            <ul>
              <h1>Legal</h1>
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="product footer-section">
            <ul>
              <h1>Products</h1>
              <li>Take Tour</li>
              <li>Live Chat</li>
              <li>Review</li>
            </ul>
          </div>
        </div>
        <div className="newsletter footer-section">
          <h1>Newsletter</h1>
          <p>Stay Up to Date</p>
          <form>
            <input type="email" placeholder="your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <h3>Copyright 2022 uifry.com all rights reserved</h3>
    </>
  );
};

export default Footer;
