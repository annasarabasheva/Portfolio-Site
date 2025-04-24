import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <h1>Welcome to My Portfolio</h1>
                <p>Hi, I'm [Your Name], a [Your Profession/Role]</p>
                <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Explore More</button>
            </section>

            {/* About Section */}
            <section className="about">
                <h2>About Me</h2>
                <p>
                    I'm a passionate [Your Profession/Role] with experience in [Your Skills/Technologies].
                    I love building projects that solve real-world problems.
                </p>
            </section>

            {/* Projects Section */}
            <section className="projects">
                <h2>My Projects</h2>
                <div className="project-list">
                    {/* Add project cards or links here */}
                    <div className="project-card">
                        <h3>Project 1</h3>
                        <p>Short description of the project.</p>
                    </div>
                    <div className="project-card">
                        <h3>Project 2</h3>
                        <p>Short description of the project.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© [Your Name] {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
};

export default Home;