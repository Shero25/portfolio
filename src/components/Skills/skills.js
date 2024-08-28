import React from "react";
import "./skills.css";

function Skills(){
    return(
        <div class="skills-section">
        <div class="soft-skills">
            <h2 class="section-title">SOFT SKILLS</h2>
            <div class="skill">
                <div class="skill-rating">4/5</div>
                <div class="skill-name">Problem Solving</div>
            </div>
            <div class="skill">
                <div class="skill-rating">4/5</div>
                <div class="skill-name">Interpersonal Skills</div>
            </div>
            <div class="skill">
                <div class="skill-rating">4/5</div>
                <div class="skill-name">Leadership Skills</div>
            </div>
            <div class="skill">
                <div class="skill-rating">4/5</div>
                <div class="skill-name">Team Player Skills</div>
            </div>
            <div class="skill">
                <div class="skill-rating">4/5</div>
                <div class="skill-name">Communication</div>
            </div>
        </div>
        <div class="technical-skills">
            <h2 class="section-title">TECHNICAL SKILLS</h2>
            <div class="skill-bar">
                <span>Overall Rating</span>
                <div class="bar">
                    <div class="final" style={{width: '90%'}}></div>
                </div>
            </div>
            <div class="skill-bar">
                <span>Angular</span>
                <div class="bar">
                    <div class="final" style={{width: '85%'}}></div>
                </div>
            </div>
            <div class="skill-bar">
                <span>HTML & CSS</span>
                <div class="bar">
                    <div class="final" style={{width: '90%'}}></div>
                </div>
            </div>
            <div class="skill-bar">
                <span>Java Spring Boot</span>
                <div class="bar">
                    <div class="final" style={{width: '85%'}}></div>
                </div>
            </div>
            <div class="skill-bar">
                <span>PostgreSQL</span>
                <div class="bar">
                    <div class="final" style={{width: '85%'}}></div>
                </div>
            </div>
            <div class="skill-bar">
                <span>Git</span>
                <div class="bar">
                    <div class="final" style={{width: '80%'}}></div>
                </div>
            </div>
        </div>
    </div>
    
    );
}
export default Skills;