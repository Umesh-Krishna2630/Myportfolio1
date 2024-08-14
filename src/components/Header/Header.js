import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">My-Portfolio</Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/achievements">Achievements</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="github-button">
        <a href="https://github.com/Umesh-Krishna2630" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </header>
  );
}

export default Header;
