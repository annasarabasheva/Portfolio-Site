import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <h2>Education</h2>

      <div className="education-timeline">
        <div className="education-item">
          <img src="/UniRWTH.jpg" alt="RWTH Aachen University" />
          <div className="education-content">
            <h3>RWTH Aachen University</h3>
            <span className="degree">B.Sc. Industrial Engineering (Mechanical Engineering Focus)</span>
            <span className="duration">Aachen, Germany | 2018 - 2024</span>

            <div className="subsection">
              <h4>Interdisciplinary Focus</h4>
              <ul>
                <li>Fundamentals of Natural and Engineering Sciences</li>
                <li>Integration Area</li>
                <li>Fundamentals of Economics</li>
                <li>Career Fields</li>
              </ul>
            </div>

            <div className="subsection">
              <h4>Software Tools & Skills</h4>
              <ul>
                <li>CAD: Siemens NX10</li>
                <li>Anaconda: Spyder & Gurobi (Optimization with Gurobi Solver)</li>
                <li>PyCharm, Jupyter Notebook</li>
              </ul>
            </div>

            <div className="subsection">
              <h4>Thesis</h4>
              <ul>
                <li>Conducted at the Institute for Power Plant Technology, Steam and Gas Turbines (IKDG)</li>
                <li><strong>Topic:</strong> "Analysis of the transcritical heat pump process for different working fluids"</li>
                <li><strong>Grade:</strong> 1.3</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="education-item">
          <img src="/romainRolland.jpg" alt="High School Romain Rolland" />
          <div className="education-content">
            <h3>Foreign Language High School "Romain Rolland"</h3>
            <span className="degree">High School Diploma</span>
            <span className="duration">Stara Zagora, Bulgaria | 2013 - 2018</span>
            <ul>
              <li>Core Subjects: German, English, Mathematics, Bulgarian</li>
              <li>Participation in European Projects: SchulBrücke Europe 2016</li>
              <li>Participation in the German Language Olympiad from 8th to 12th grade, reaching the national level.</li>
            </ul>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
