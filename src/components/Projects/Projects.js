import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Runway Lighting System Using Arduino</h3>
          <p>Implementation of the runway lighting system using ultrasonic sensor and other components</p>
          <a href="https://github.com/Umesh-Krishna2630/Runway-Lighting-System-using-IOT-Arduino-.git" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* Repeat for more projects */}
      </div>
    </section>
  );
}

export default Projects;
