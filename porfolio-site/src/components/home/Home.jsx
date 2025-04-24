import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <h1>Hi, I'm Hristiyan Borisov</h1>
                <p>Welcome to my Portfolio</p>
                <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Explore More</button>
               
            </section>
            <section className="image"> 
                <img src="/profile-pic.jpg" alt="profile-pic" />
            </section>


        </div>
    );
};

export default Home;