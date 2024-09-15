import React from 'react';
import flo from './flo.png';
import email from './email.png';

const AboutMe = () => {
  return (
    <div className="section-container">
    <section className="section" id="about-me">
        <div className="section-pic-container">
          <img src={flo} alt="profile" />
        </div>
        <div className="section-text">
          <p className="section-text-p1">Hello, I'm</p>
          <h2 className="title"> Jan Yrin</h2>
          <p className="section-text-p2">
            Welcome, to My Portfolio
          </p>

          <div className="button-container">
            <button type="button" className="btn-prof">
              <a href="#contact"><img src={email} alt="mail" style={{width:'20px', height:'20px'}}></img> Contact Me</a>
            </button>
          </div>
        </div>
    </section>
    


    </div>

  

  );
};

export default AboutMe;
