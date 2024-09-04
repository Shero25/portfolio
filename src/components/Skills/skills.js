import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './skills.css';

// Import React Icons
import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaAngular, FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiJavascript, SiPostgresql,SiPhp  } from "react-icons/si";

function Skills() {
  const skills = [
    { name: 'HTML', value: 85, color: '#E44D26', icon:<FaHtml5 /> }, 
    { name: 'JavaScript', value: 70, color: '#F7DF1E', icon: <SiJavascript /> }, 
    { name: 'CSS', value: 85, color: '#1572B6', icon: <FaCss3Alt /> }, 
    { name: 'PHP', value: 68, color: '#787CB5', icon: <SiPhp  /> },
    { name: 'PostgreSQL', value: 80, color: '#336791', icon: <SiPostgresql /> },
    { name: 'Spring Boot', value: 65, color: '#6DB33F', icon: <BiLogoSpringBoot /> },
    { name: 'Angular', value: 73, color: '#DD0031', icon: <FaAngular /> },
    { name: 'React', value: 45, color: '#61DAFB', icon: <FaReact /> }, 
  ];

  return (
    <section id="skill" className="skills-section">
       <h2 className="contact-heading">  MY SKILLS</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <CircularProgressbar
              value={skill.value}
              text={`${skill.value}%`}
              styles={buildStyles({
                pathColor: skill.color, 
                textColor: '#000',
                trailColor: '#d6d6d6',
                backgroundColor: '#f8f8f8',
              })}
            />
            <div className="skill-text">
              <span className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </span>
              <p>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
