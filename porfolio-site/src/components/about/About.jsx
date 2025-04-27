import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <div className="content">
                <img 
                    src="/HR2.jpg" 
                    alt="Profile" 
                    className="profile-img"
                />
                <div className="bio">
                    <p>
                        Hi, I'm Hristiyan Borisov, a passionate Industrial Engineer with a focus on Mechanical Engineering. I'm particularly interested in integrating engineering principles with 
                        technology, science, and economics.
                    </p>
                    <p>
                        Over the years, I've gained practical experience through various internships, thesis work, and projects. 
                        I enjoy solving complex problems using innovative and technical solutions. I am always eager to grow my 
                        skills and learn more about the latest technologies in the field.
                    </p>
                    <p>
                        With a deep curiosity for both theory and application, I strive to bring a creative and analytical approach 
                        to every task. Outside of my studies, I love exploring new technologies and methodologies that push the 
                        boundaries of engineering and science.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
