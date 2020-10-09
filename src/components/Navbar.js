import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { MenuItems } from './MenuItems';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="navbar-container">
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Startup</h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
            ></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    className="nav-link"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
