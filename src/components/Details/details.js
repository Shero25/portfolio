import React from "react";
import './Details.css'; // Import the CSS file

function Details() {
    return (
        <div className="aboutMe">
            <div className="explain-section">
                <h2 className="mb-5 text-center">About Me</h2>
            </div>
            <div className="hero-section d-flex">
            <div className="image">
                    <img src="Me.jpg" alt="Sheroline Malatjie" />
                </div>
                <div className="detail">
                    <p>
                        I'm Sheroline Malatjie, a Full Stack Developer with a passion for building user-friendly and scalable web applications.
                        With expertise in Angular, Spring Boot, and PostgreSQL, I create efficient solutions that solve real-world problems. 
                        My focus is on delivering clean, maintainable code and intuitive interfaces. I'm always eager to learn and adapt,
                        bringing fresh ideas to every project I work on.
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default Details;
