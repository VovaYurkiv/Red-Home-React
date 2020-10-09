import React from 'react';
import './Footer.css';
import footer_icon from './assets/footer_icon.png';

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-nav">
            <a href="#">
              <img
                className="footer-icon"
                src={footer_icon}
                alt="twitter-icon"
              />
            </a>
            <a href="#">
              <img
                className="footer-icon"
                src={footer_icon}
                alt="twitter-icon"
              />
            </a>
            <a href="#">
              <img
                className="footer-icon"
                src={footer_icon}
                alt="twitter-icon"
              />
            </a>
            <a href="#">
              <img
                className="footer-icon"
                src={footer_icon}
                alt="twitter-icon"
              />
            </a>
          </div>
          <div className="footer-line"></div>
          <h1 className="footer-by">
            &copy; 2015 Startup, Designed by ShapedTheme
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
