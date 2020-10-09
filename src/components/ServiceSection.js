import React from 'react';
import './ServiceSection.css';
import service1 from './assets/service1.png';
import service2 from './assets/service2.png';
import service3 from './assets/service3.png';

function ServiceSection() {
  return (
    <>
      <div className="services-container">
        <div className="services">
          <h1 className="section-name">SERVICES</h1>
          <div className="section-line"></div>
          <p>We offer ipsum dolor sit amet, conseteur sadipscing elitr amet</p>
          <div className="offers">
            <div className="offer">
              <img src={service1} alt="" />
              <h2>Clean Typography</h2>
              <p className="services-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit. Lorem ipsum.
              </p>
            </div>
            <div className="offer">
              <img src={service2} alt="" />
              <h2>Rock Solid Code</h2>
              <p className="services-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit. Lorem ipsum.
              </p>
            </div>
            <div className="offer">
              <img src={service3} alt="" />
              <h2>Expert Support</h2>
              <p className="services-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit. Lorem ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceSection;
