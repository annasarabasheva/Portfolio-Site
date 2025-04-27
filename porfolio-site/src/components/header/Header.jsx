import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
        <nav>
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/skills"> Skills</Link></li>
                <li><Link to="#getintouch">Get In Touch</Link></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
