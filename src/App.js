import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import AboutMe2 from './components/Aboutme2';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="about-me">My Portfolio </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#aboutMe2">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="aboutMe">
          <AboutMe />
        </section>
        <section id="aboutMe2">
          <AboutMe2 />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
      </main>

      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
