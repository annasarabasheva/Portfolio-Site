import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <h1>Hi, I'm Hristiyan Borisov</h1>
                <p>Welcome to my Portfolio</p>
                <Link to="/about">
                    <button>
                        ABOUT ME
                    </button>
                </Link>
            </section>

            <section className="image"> 
                <img src="/profile-pic.jpg" alt="profile-pic" />
            </section>
        </div>
    );
};

export default Home;
