import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './skills.css';
import 'boxicons';


function Skills() {
  const skills = [
    { name: 'HTML', value: 75, color: '#E44D26', icon:<box-icon name='html5' type='logo' animation='flashing' color='#e44d26' ></box-icon>},
    { name: 'JavaScript', value: 58, color: '#F7DF1E',icon:<box-icon name='javascript' type='logo' animation='spin' color='#f7df1e' ></box-icon>},
    { name: 'CSS', value: 75, color: '#1572B6', icon:<box-icon name='css3' type='logo' animation='tada' color='#1572b6' ></box-icon> },
    { name: 'PHP', value: 47, color: '#787CB5', icon: <box-icon name='php' type='logo' animation='burst' color='#787cb5' ></box-icon> },
    { name: 'PostgreSQL', value: 68, color: '#336791', icon: <box-icon name='postgresql' type='logo' animation='tada' color='#336791' ></box-icon>},
    { name: 'Spring Boot', value: 60, color: '#6DB33F', icon:<box-icon name='spring-boot' type='logo' animation='fade-left' color='#6db33f' ></box-icon> },
    { name: 'Angular', value: 63, color: '#DD0031', icon: <box-icon name='angular' type='logo' animation='spin' color='#dd0031' ></box-icon> }, // Boxicon for Angular
    { name: 'React', value: 40, color: '#61DAFB', icon: <box-icon name='react' type='logo' animation='spin' color='#61dafb' ></box-icon>},
  ];

  return (
    <section id="skill" className="skills-section">
      <h2 className="contact-heading">MY SKILLS</h2>
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
