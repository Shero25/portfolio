import React from 'react';

function Projects() {
  return (
    <section id="projects" className="container py-5" > 
      <h2 className="mb-5 text-center" style={{ fontWeight: 'bold', color: '#343a40' }}>Projects</h2> 
      <div className="row justify-content-center"> 
        <div className="col-md-3 mb-3">
          <div className="card text-center" style={{ width: '300px', borderRadius: '10px' }}>
            <img src="nemss.png" className="card-img-top" alt="Project 1"  style={{width:'300px,',height:'225px'}} />
            <div className="card-body">
              <h5 className="card-title" >Project 1</h5>
              <p className="card-text" style={{ color: '#6c757d' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary" style={{ backgroundColor: '#ffbb33', border: 'none', borderRadius: '5px' }}>View</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center" style={{ width: '300px', borderRadius: '10px' }}>
            <img src="pers.png" className="card-img-top" alt="Project 2" style={{width:'300px'}}/>
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text" style={{ color: '#6c757d' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary" style={{ backgroundColor: '#ffbb33', border: 'none', borderRadius: '5px' }}>View</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center" style={{ width: '300px', borderRadius: '10px' }}>
            <img src="pers2.png" className="card-img-top" alt="Project 3"  style={{width:'300px'}}/>
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text" style={{ color: '#6c757d' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary" style={{ backgroundColor: '#ffbb33', border: 'none', borderRadius: '5px' }}>View</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
