import React from 'react';
import './AboutSection.css';
import about1 from './assets/about1.jpg';
import about2 from './assets/about2.jpg';
import about3 from './assets/about3.jpg';
import about4 from './assets/about4.jpg';

function AboutSection() {
  return (
    <>
      <div className="about-container">
        <div className="about">
          <h1>ABOUT US</h1>
          <div className="section-line"></div>
          <p>Lorem ipsum dolor sit amet, conseteur sadipscing elitr amet</p>
          <div className="about-text">
            <h1 className="about-text-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam
              nonumy eirmod tempor invidunt ut labore et dolore aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo dolores et ea
              rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. Lorem ipsum dolor et dolore aliquyam
              erat. Lorem ipsum dolor sit amet. Lorem ipsum eat.
            </h1>
            <h1 className="about-text-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam
              nonumy eirmod tempor invidunt ut labore et dolore aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo dolores et ea
              rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. Lorem ipsum dolor et dolore aliquyam
              erat. Lorem ipsum dolor sit amet. Lorem ipsum eat.
            </h1>
          </div>

          <div className="about-people">
            <div className="person">
              <div className="person-info">
                <img
                  className="about-picture"
                  src={about1}
                  alt="Khalil Uddin"
                />
              </div>
              <h2 className="person-header">Md. Khalil Uddin</h2>
              <p className="person-rank">Head Of Ideas</p>
            </div>
            <div className="person">
              <div className="person-info">
                <img className="about-picture" src={about2} alt="Rubel Miah" />
              </div>
              <h2 className="person-header">Rubel Miah</h2>
              <p className="person-rank">Lead WordPress Developer</p>
            </div>
            <div className="person">
              <div className="person-info">
                <img className="about-picture" src={about3} alt="Shamim Mia" />
              </div>
              <h2 className="person-header">Shamim Mia</h2>
              <p className="person-rank">Sr. Web Developer</p>
            </div>
            <div className="person">
              <div className="person-info">
                <img className="about-picture" src={about4} alt="John Doe" />
              </div>
              <h2 className="person-header">John Doe</h2>
              <p className="person-rank">Front-end Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
