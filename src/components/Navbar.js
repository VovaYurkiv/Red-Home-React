import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <h1 className="navbar-logo">Startup</h1>
          <nav className="navbar-nav">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link"
              tabindex="1"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="navbar-link"
              tabindex="1"
            >
              Services
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="navbar-link"
              tabindex="1"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="navbar-link"
              tabindex="1"
            >
              Works
            </Link>
            <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="navbar-link"
              tabindex="1"
            >
              Blog
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="navbar-link"
              tabindex="1"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
