import React from 'react';
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
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary" style={{backgroundColor:'#76B041',border:'none'}}>View</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <img src="pers.png" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary" style={{backgroundColor:'#76B041',border:'none'}}>View</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <img src="pers2.png" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary" style={{backgroundColor:'#76B041',border:'none'}}>View</button>
            </div>
          </div>
          
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <img src="quiz.png" className="card-img-top" alt="Quizz" />
            <div className="card-body">
              <h5 className="card-title">Quizz App</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary" style={{backgroundColor:'#76B041',border:'none'}}>View</button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Projects;
