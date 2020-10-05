import React from 'react';
import './BlogSection.css';
import blog1 from './assets/blog1.jpg';
import blog2 from './assets/blog2.jpg';

function BlogSection() {
  return (
    <>
      <div className="blog-container">
        <div className="blog">
          <h1>BlOG POSTS</h1>
          <div className="section-line"></div>
          <p>Lorem ipsum dolor sit amet, conseteur sadipscing elitr amet</p>
          <div className="blog-post">
            <img className="blog-image" src={blog1} alt="" />
            <div className="blog-info">
              <div className="blog-description">
                <h1 className="blog-time">18 OCT</h1>
                <h1 className="blog-title">
                  User interface designing elements
                </h1>
                <h2 className="blog-by">By Khalil Uddin in Development</h2>
              </div>
              <p className="blog-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod teduntlabore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et erebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidulabore et dolore aliquyam erat, sed diam{' '}
              </p>
            </div>
          </div>
          <div className="line-after"></div>
          <div className="blog-post">
            <img className="blog-image" src={blog2} alt="" />
            <div className="blog-info">
              <div className="blog-description">
                <h1 className="blog-time">20 SEP</h1>
                <h1 className="blog-title">Startup ideas needs to be funded</h1>
                <h2 className="blog-by">By Khalil Uddin in Development</h2>
              </div>
              <p className="blog-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod teduntlabore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et erebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidulabore et dolore aliquyam erat, sed diam{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSection;
