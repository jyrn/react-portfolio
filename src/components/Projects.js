import React from 'react';
import webImage from './web.jpeg'; // Update the correct image paths
import progImage from './prog.jpeg'; // Update the correct image paths
import mobImage from './mob.avif'; // Update the correct image paths

const Projects = () => {
  const changeColor = (color) => {
    const projectSection = document.getElementById('projects');
    projectSection.style.backgroundColor = color;
  };

  return (
    <div className="section-margin" style={{ paddingTop: '20px' }} id="projects">
      <section id="projects" className="container my-5">
        <h1 className="text-center">
          My Projects </h1>

        <div className="card-container">
          <div className="d-flex justify-content-center mb-3">
            {/* Portfolio 1 */}
            <div
              className="card"
              style={{ width: '50rem', margin: '0 10px', borderRadius: '30px' }}
              onClick={() => changeColor('#99d98c')}
            >
              <img src={webImage} className="card-img-top" alt="Basic Web Development Project" />
              <div className="card-body">
                <h5 className="card-title">Basic Web Development Project</h5>
                <p className="card-text">
                  A beginner project demonstrating basic web development.
                </p>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#web">
                  More Details
                </button>
              </div>
            </div>

            {/* Portfolio 2 */}
            <div
              className="card"
              style={{ width: '50rem', margin: '0 10px', borderRadius: '30px' }}
              onClick={() => changeColor('#a2d2ff')}
            >
              <img src={progImage} className="card-img-top" alt="Beginner's Guide to Programming Project" />
              <div className="card-body">
                <h5 className="card-title">Beginner's Guide to Programming Project</h5>
                <p className="card-text">
                  A project for learning fundamental programming concepts through coding exercises.
                </p>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#prog">
                  More Details
                </button>
              </div>
            </div>

            {/* Portfolio 3 */}
            <div
              className="card"
              style={{ width: '50rem', margin: '0 10px', borderRadius: '30px' }}
              onClick={() => changeColor('#ffd670')}
            >
              <img src={mobImage} className="card-img-top" alt="Mobile App Development Project" />
              <div className="card-body">
                <h5 className="card-title">Mobile App Development Project</h5>
                <p className="card-text">
                  An introduction to mobile app development with basics of UI/UX design and coding.
                </p>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mob">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <div>
        {/* Modal for Web Development Project */}
        <div className="modal fade" id="web" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="webLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="webLabel">Basic Web Development Project</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                The "Basic Web Development Project" is a project aimed at teaching fundamental web development skills. This involves creating a simple website using HTML, CSS, and JavaScript.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Programming Guide Project */}
        <div className="modal fade" id="prog" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="progLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="progLabel">Beginner's Guide to Programming Project</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                The "Beginner's Guide to Programming Project" is designed to help beginners grasp core programming concepts. It includes basic programming skills, hands-on exercises, and debugging techniques.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Mobile App Development Project */}
        <div className="modal fade" id="mob" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="mobLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="mobLabel">Mobile App Development Project</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                The "Mobile App Development Project" guides you through creating a mobile app, covering UI/UX design, app development with tools like Android Studio or Xcode, and testing for various devices. It ends with deploying your app to app stores, offering practical experience in mobile app creation.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
