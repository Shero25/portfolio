import "./about.css";
import React from 'react';

function About() {
    
    return (
        <section id="home" className="profile-section">
            <div className="profile-container">
                <div className="profile-image-wrapper">
                    <div className="image-background"></div>
                    <img src="ntha.png" alt="Sheroline Malatjie" className="profile-image" style={{width:'400px'}}/>
                </div>
                <div className="profile-content-wrapper">
                    <div className="profile-content">
                        <h2>
                            <span className="highlight">Hi <span className="wave-hand">&#128075;</span> I'M Sheroline Malatjie.</span>
                        </h2>
                        <h3><span >Full Stack Developer</span></h3>
                        <p>
                            I'm Sheroline Malatjie, a Full Stack Developer with a passion for building user-friendly and scalable web applications.
                            With expertise in Angular, Spring Boot, and PostgreSQL, I create efficient solutions that solve real-world problems.
                        </p>
                        <a href="#about">
                            <button className="btn-more" style={{ marginLeft: '20px' }}>
                                MORE ABOUT ME
                                <span className="btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
