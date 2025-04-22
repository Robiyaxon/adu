import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';
import img from "../asserts/logo.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <img src={img} alt="University Logo" className={styles.logo} />
          <p className={styles.description}>Open new horizons through education and innovation.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.linkGroups}>
            <ul className={styles.linkList}>
              <li><a href="/">About us</a></li>
              <li><a href="/shop">Academics</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">SDG</a></li>
            </ul>
            <ul className={styles.linkList}>
              <li><a href="/contact">Research</a></li>
              <li><a href="/contact">Admission</a></li>
              <li><a href="/contact">News</a></li>
              <li><a href="/contact">Department and Service</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <h3 className={styles.socialMediaHeading}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.fb.com/andsu.uz" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/adu.uzb" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://t.me/adu_uz" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
            <a href="https://www.youtube.com/aduuz" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
