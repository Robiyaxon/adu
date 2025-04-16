import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import videoBg from "../../asserts/vid.MP4";
import logo from "../../asserts/logo.png";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbarRef.current.classList.add('scrolled');
      } else {
        navbarRef.current.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section with Video */}
      <div className="hero-section">
        <video autoPlay muted loop playsInline className="video-bg">
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Utility Bar */}
     

      {/* Main Navbar */}
      <nav
        className="navbar"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={navbarRef}
      >
         <div className="utility-bar">
        <div className="left-text"></div>

        <div className="right-section">
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>

          <select className="language-selector">
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </div>
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
    </>
  );
};

export default Navbar;
