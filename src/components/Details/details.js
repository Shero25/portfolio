import React from 'react';
import './Details.css';

function Details() {
    return (
        <section id="about" className="about-section">
        <h2 className="about-heading">ABOUT <span className="highlight">ME</span></h2>
        <div className="about-container">
            <div className="personal-info">
            <h3 class="summary-title">Professional Summary</h3>
<p class="summary-text">
I am a passionate full-stack developer with experience in building robust applications using 
    <strong> Angular</strong>, <strong>Spring Boot</strong>, and <strong>PostgreSQL</strong>. I thrive 
    in collaborative environments, delivering scalable solutions for business needs. My past projects
     include mobile app development for business compliance and resource hubs for entrepreneurs.
</p>
                <a href="Sheroline Malatjie Resume wit supporting documents.pdf" download className="btn-more">
                    Download CV
                    <span className="btn-icon" style={{backgroundColor:'#5C8E35',borderRadius:'40px',color:'white'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                        </svg>
                    </span>
                </a>
            </div>
            <div className="stats-info">
                <div className="stat-box1">
                    <h3>1+</h3>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="stat-box2">
                    <h3>3+</h3>
                    <p>COMPLETED PROJECTS</p>
                </div>
                <div className="stat-box3">
                    <h3>7+</h3>
                    <p>Technologies Learned</p>
                </div>
                <div className="stat-box4">
                    <h3>2+</h3>
                    <p>Certifications Earned</p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Details;
