
import React from 'react';

function About() {
    return (
     <section className="hero" style={{ backgroundColor: '#f4f4f4', height: '90vh',display:'flex',alignItems:'center' }}>
        <div className="container " style={{display:'flex'}}>
          <div className="hero-text">
            <h1>Hi! Sheroline Malatjie - <span style={{ color: '#ffbb33' }}>Full Stack-Developer</span></h1>
            <p> I am a Full Stack Developer skilled in Angular, Spring Boot, and PostgreSQL, with a passion for creating dynamic, user-friendly applications. With a Advanced diploma in software application and hands-on experience in various projects.</p>
            <p>Email: sherolinenthabiseng@gmail.com</p>
            <div className="buttons mt-4">
              <button className="btn btn-warning me-2">Download CV</button>
              <button className="btn btn-dark">Contact Me</button>
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