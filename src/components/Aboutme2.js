import React from 'react';
import fox from './fox.png';
import graduation from './graduation.png';
import badge from './badge.png';

const AboutMe2 = () => {
  return (
    <div className="section-container">
      <section id="about-me2">
      <p className="subtitle">Get To Know More</p>
      <h1 className="title">About Me</h1>

        <div className="section-content">
          <div className="image">
            <img src={fox} alt="Profile" />
          </div>
          <div className="about-details-container">
            <div className="about-container">
              <div className="details-container">
                <img src={badge} alt="Experience Icon" style={{width:'50px', height:'50px', margin:'1rem'}}/>
                <h3>Experience</h3>
                <p>Built a responside portfolio website <br />Gained experience in coding algortihms</p>
              </div>
              <div className="details-container">
                <img src={graduation} alt="Education Icon" style={{width:'50px', height:'50px', margin:'1rem'}} />
                <h3>Education</h3>
                <p>Bachelor's Degree in Computer Science <br />De La Salle Lipa</p>
              </div>
            </div>
            <div className="text-container">
              <p>Currently a 3rd-year Computer Science student at De La Salle Lipa, focusing on Frontend Development with React and JavaScript. Passionate about building web applications and gaining hands-on experience through various personal projects.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe2;
