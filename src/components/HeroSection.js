import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <>
      <div className="home-container">
        <div className="home">
          <h1 className="home-header">Welcome to Startup</h1>
          <p className="home-description">
            Your Favourite Creative Agency Template
          </p>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
