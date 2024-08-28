import "./about.css"
import React from 'react';

function About() {
    return (
     <section className="hero" >
        <div className="container ">
          <div className="hero-text">
            <h2>Hi there! <span style={{fontSize:'30px'}}>&#128075;</span></h2>
            <h1>I'm  Sheroline Malatjie -</h1>
            <span style={{ color: '#ffbb33' ,fontSize:'40px'}}> A Full Stack-Developer</span>
             <div className="buttons mt-4">
              <button className="btn btn-warning me-2" style={{color:'white'}}>Download CV</button>
              <button className="btn btn-dark" style={{backgroundColor:'black'}}>Hire Me</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="image.png" alt="Sheroline Malatjie" style={{ width: '110%',height:'110%',borderRadius:'50px' }} />
          </div>
        </div>
      </section>
    );
  }
  
  export default About;