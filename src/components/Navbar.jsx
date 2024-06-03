import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-left">
          <div className="nav-logo">
            <img src="src/assets/Logo.png" alt="" /> uiFry
          </div>
          <div className="menu">
            <ul className="menu-list">
              <li className="menu-item , active">Home</li>
              <li className="menu-item">About Us</li>
              <li className="menu-item">Pricing</li>
              <li className="menu-item">Features</li>
            </ul>
          </div>
        </div>
        <div className="btn">
          Download
        </div>
      </nav>
    </>
  );
};

export default Navbar;
