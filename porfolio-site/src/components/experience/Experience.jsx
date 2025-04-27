import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>Professional Experience</h2>

      <div className="experience-timeline">

        <div className="experience-item">
          <div className="experience-header">
            <h3>EUTECH Scientific Engineering GmbH</h3>
            <span className="position">Intern - Mechanical Engineering</span>
            <span className="location">Aachen, Germany | 06/05/2024 – 02/08/2024</span>
          </div>
          <ul className="experience-details">
            <li>Assisted in motor and controller testing at the EUmedicon unit; experience in assembly, surface treatment, and quality control.</li>
            <li>Designed and assembled testing stands using SolidWorks; handled component positioning and surface finishing tasks.</li>
            <li>Performed inspections, leak tests, and quality checks to ensure compliance with design specifications.</li>
            <li>Managed complex mechanical projects with SolidWorks and PDM systems.</li>
            <li>Supported power plant optimization projects focused on combustion efficiency and coal mass flow measurements.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Institute for Power Plant Technology, Steam and Gas Turbines (IKDG), RWTH Aachen</h3>
            <span className="position">Bachelor Thesis - Experimental Research</span>
            <span className="location">Aachen, Germany | 15/05/2023 – 12/03/2024</span>
          </div>
          <ul className="experience-details">
            <li>Thesis Topic: <strong>"Analysis of the transcritical heat pump process for different working fluids"</strong></li>
            <li>Simulated heat pump cycles using a Python-based framework, evaluating different working fluids and configurations (Nozzle, Expander, Recuperator).</li>
            <li>Conducted KPI analysis to compare system performance across various scenarios.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Energoremont-Galabovo AD</h3>
            <span className="position">Internship - Industrial Boilers</span>
            <span className="location">Galabovo, Bulgaria | 26/04/2021 – 25/06/2021</span>
          </div>
          <ul className="experience-details">
            <li>Completed 7-week full-time internship focusing on metallic material manufacturing processes.</li>
            <li>Gained experience with thermal joining and separation processes.</li>
            <li>Received production-specific training related to industrial boiler operations and maintenance.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;
