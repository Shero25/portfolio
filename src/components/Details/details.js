import React from 'react';
import { TbFileCv } from "react-icons/tb";
import './Details.css';

function Details() {
    return (
        <section className="about-section">
        <h2 className="about-heading">ABOUT <span className="highlight">ME</span></h2>
        <div className="about-container">
            <div className="personal-info">
                <h3>Personal Information</h3>
                <ul className="info-list">
                    <li><strong>First Name:</strong> Sheroline</li>
                    <li><strong>Last Name:</strong> Malatjie</li>
                    <li><strong>Age:</strong> 25 Years</li>
                    <li><strong>Nationality:</strong> South African</li>
                    <li><strong>Languages:</strong> Sepedi, English</li>
                </ul>
                <button className="btn-more">
                       Downlod CV
                        <span className="btn-icon" style={{backgroundColor:'#5C8E35',borderRadius:'40px',color:'white'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                      </svg>
                        </span>
                    </button>
            </div>
            <div className="stats-info">
                <div className="stat-box">
                    <h3>1+</h3>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="stat-box">
                    <h3>3+</h3>
                    <p>COMPLETED PROJECTS</p>
                </div>
                <div className="stat-box">
                    <h3>7+</h3>
                    <p>Technologies Learned</p>
                </div>
                <div className="stat-box">
                    <h3>3+</h3>
                    <p>Certifications Earned</p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Details;
