import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>Professional Experience</h2>

      <div className="experience-timeline">
        <div className="experience-item">
          <div className="experience-header">
            <img src="/eutech.jpeg" alt="Eutech Logo" className="experience-logo" />
            <div>
              <h3>Eutech Scientific Engineering GmbH</h3>
              <span className="position">Intern - Mechanical Engineering</span>
              <span className="location">Aachen, Germany | 06/05/2024 – 02/08/2024</span>
            </div>
          </div>
          <ul className="experience-details">
            <li>Assisted with the EUmedicon unit for testing motors and controllers (assembly, surface treatment, quality control).</li>
            <li>Designed and assembled testing stands using SolidWorks; handled component positioning and finishing.</li>
            <li>Performed inspections, leak tests, and quality checks to ensure design compliance.</li>
            <li>Contributed to power plant optimization projects (combustion efficiency and coal mass flow measurements).</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <img src="/IKDG.jpg" alt="IKDG Logo" className="experience-logo" />
            <div>
              <h3>Institute for Power Plant Technology, Steam and Gas Turbines (IKDG), RWTH Aachen</h3>
              <span className="position">Thesis Researcher</span>
              <span className="location">Aachen, Germany | 15/05/2023 – 12/03/2024</span>
            </div>
          </div>
          <ul className="experience-details">
            <li>Topic: <strong>"Analysis of the transcritical heat pump process for different working fluids"</strong>.</li>
            <li>Conducted simulations using Python-based models for district heating applications.</li>
            <li>Evaluated different working fluids and system configurations (nozzle, expander, recuperator) via KPI analysis.</li>
            <li>Analyzed and compared scenarios for optimal exergy utilization and efficiency improvements.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <img src="/galabovo.jpg" alt="EnergoRemont Logo" className="experience-logo" />
            <div>
              <h3>EnergoRemont-Galabovo AD</h3>
              <span className="position">Intern</span>
              <span className="location">Galabovo, Bulgaria | 26/04/2021 – 25/06/2021</span>
            </div>
          </div>
          <ul className="experience-details">
            <li>Completed a 7-week full-time internship covering manufacturing processes for metallic materials.</li>
            <li>Gained hands-on experience in thermal joining, separation processes, and industrial boiler maintenance.</li>
            <li>Acquired production-specific insights into large-scale energy systems and operations.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;
