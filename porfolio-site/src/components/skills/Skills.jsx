import React from "react";
import "./Skills.css";
import { FaPython, FaLanguage, FaLaptopCode, FaPeopleCarry, FaCertificate } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {/* Languages */}
        <div className="skill-card">
          <FaLanguage className="skill-icon" />
          <h3>Languages</h3>
          <p><strong>Mother Tongue:</strong> Bulgarian</p>
          <p><strong>German:</strong> C1 (Proficient)</p>
          <p><strong>English:</strong> C1 (Proficient)</p>
          <p><strong>Chinese:</strong> A2 (Basic)</p>
        </div>

        {/* Programming */}
        <div className="skill-card">
          <FaPython className="skill-icon" />
          <h3>Programming</h3>
          <p>Simulations with Python</p>
          <p>Jupiter Notebook</p>
          <p>Gurobi Optimization Software</p>
        </div>

        {/* Technical */}
        <div className="skill-card">
          <FaLaptopCode className="skill-icon" />
          <h3>Technical Skills</h3>
          <p>Python Simulations</p>
          <p>CFD (Flow Simulation)</p>
          <p>CAD Software (SolidWorks, Siemens NX)</p>
        </div>

        {/* Soft Skills */}
        <div className="skill-card">
          <FaPeopleCarry className="skill-icon" />
          <h3>Soft Skills</h3>
          <p>Intercultural Communication</p>
          <p>Team Leadership (Dormitory Representative)</p>
          <p>Event Organization (Festival Management)</p>
        </div>

          {/* Certificates */}
        <div className="skill-card">
          <FaCertificate className="skill-icon" />
          <h3>Certificates</h3>
          <p>Python Basics Certificate (SoftUni)</p>
          <p>CFD Simulation with Cadence Omnis</p>
        </div>

      </div>

      
    </section>
  );
};

export default Skills;
