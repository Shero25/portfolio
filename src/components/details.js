import React from "react";

function details(){
    return(
 <div className="aboutMe">
     <div className="explain-section">
      <h2 className="mb-5 text-center" style={{ fontWeight: 'bold', color: '#343a40' ,backgroundColor:' #FFDBBB'}}>About Me</h2>
      </div>
      <div className="hero-section d-flex">
      <div className="detail">
      <p>I'm Sheroline Malatjie, a Full Stack Developer with a passion for building user-friendly and scalable web applications.
         With expertise in Angular, Spring Boot, and PostgreSQL, I create efficient solutions that solve real-world problems. 
         My focus is on delivering clean, maintainable code and intuitive interfaces. I'm always eager to learn and adapt,
         bringing fresh ideas to every project I work on.
      </p>
      </div>
    <div className="image">
    <img src="image.png" alt="Sheroline Malatjie" style={{ width: '110%',height:'110%',borderRadius:'50px' }} />
    </div>
    </div>
 </div>
    );
}
export default details;