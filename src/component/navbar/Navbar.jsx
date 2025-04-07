import React, { useState } from "react";
import "./Navbar.css";
import videoBg from "../../asserts/vid.MP4";
import logo from "../../asserts/logo.png";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="navbar-wrapper">
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navbar */}
      <nav
        className="navbar"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="nav-links">
          <div className="nav-item"><a href="#">About us</a></div>
          <div className="nav-item"><a href="#">Academics</a></div>
          <div className="nav-item"><a href="#">SDG</a></div>
          <div className="nav-item"><a href="#">Interactive Service</a></div>
        </div>

        <img src={logo} alt="Logo" className="logo" />

        <div className="nav-links">
          <div className="nav-item"><a href="#">Research</a></div>
          <div className="nav-item"><a href="#">Admission</a></div>
          <div className="nav-item"><a href="#">News</a></div>
          <div className="nav-item"><a href="#">Department and Service</a></div>
        </div>

        {/* Drawer */}
        <div className={`drawer-container ${isHovered ? 'show' : ''}`}>
          <div className="drawer">
            <a href="#">Overview</a>
            <a href="#">Rector's Office</a>
            <a href="#">ASU History</a>
            <a href="#">Policies</a>
          </div>
          <div className="drawer">
            <a href="#">Publications</a>
            <a href="#">Projects</a>
            <a href="#">Collaborations</a>
          </div>
          <div className="drawer">
            <a href="#">Undergraduate</a>
            <a href="#">Graduate</a>
            <a href="#">International</a>
          </div>
          {[...Array(5)].map((_, i) => (
            <div className="drawer" key={i}>
              <a href="#">Housing</a>
              <a href="#">Clubs</a>
              <a href="#">Events</a>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
