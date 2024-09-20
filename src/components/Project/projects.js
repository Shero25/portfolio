import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import './Projects.css'; // Import the CSS file

function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="contact-heading">Projects</h2>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <img src="nemss.png" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">NEMSS</h5>
              <p className="card-text">Is an app that will assist Entrepreneurs to start and help them grow their business.</p>
              <a href="https://github.com/The-DigitalAcademy/NEMSS" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{backgroundColor:'#76B041',border:'none'}}>
                <FaGithub style={{ marginRight: '5px' }} /> View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <img src="travel.png" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Travel App</h5>
              <p className="card-text">A travel app is a platform designed to help users plan, book, and manage their travel experiences.</p>
              <a href="https://github.com/Shero25/recipeApp" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{backgroundColor:'#76B041',border:'none'}}>
                <FaGithub style={{ marginRight: '5px' }} /> View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <img src="movie.png" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Movie App</h5>
              <p className="card-text">A movie app is a platform that allows users to browse and search through a vast collection of movies.</p>
              <a href="https://github.com/Ntshuxekani/ReelReLish" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{backgroundColor:'#76B041',border:'none'}}>
                <FaGithub style={{ marginRight: '5px' }} /> View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <img src="quiz.png" className="card-img-top" alt="Quizz" />
            <div className="card-body">
              <h5 className="card-title">Quizz App</h5>
              <p className="card-text">A platform that allows users to test their knowledge across various topics through interactive quizzes.</p>
              <a href="https://github.com/Shero25/quiz-app" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{backgroundColor:'#76B041',border:'none'}}>
                <FaGithub style={{ marginRight: '5px' }} /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
