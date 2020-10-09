import React from 'react';
import './WorkSection.css';
import work1 from './assets/work1.jpg';
import work2 from './assets/work2.jpg';
import work3 from './assets/work3.jpg';
import work4 from './assets/work4.jpg';
import work5 from './assets/work5.jpg';
import work6 from './assets/work6.jpg';
import work7 from './assets/work7.jpg';
import work8 from './assets/work8.jpg';
import work9 from './assets/work9.jpg';

function WorkSection() {
  return (
    <>
      <div className="works-container">
        <div className="works">
          <h1>LATEST WORKS</h1>
          <div className="section-line"></div>
          <ul className="works-nav">
            <li className="work-nav">All</li>
            <li className="work-nav">Branding</li>
            <li className="work-nav">Design</li>
            <li className="work-nav">Development</li>
            <li className="work-nav">Strategy</li>
          </ul>

          <div className="works-images">
            <div className="work-image">
              <img className="work-picture" src={work1} alt=" " />
            </div>

            <div className="work-image">
              <img className="work-picture" src={work2} alt=" " />
            </div>

            <div className="work-image">
              <img className="work-picture" src={work3} alt=" " />
            </div>

            <div className="work-image">
              <img className="work-picture" src={work4} alt=" " />
            </div>

            <div className="work-image">
              <img className="work-picture" src={work5} alt=" " />
            </div>

            <div className="work-image">
              <img className="work-picture" src={work6} alt=" " />
            </div>

            <div className="work-image">
              <img className="work-picture" src={work7} alt=" " />
            </div>

            <div className="work-image">
              <img className="work-picture" src={work8} alt=" " />
            </div>

            <div className="work-image">
              <img className="work-picture" src={work9} alt=" " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkSection;
