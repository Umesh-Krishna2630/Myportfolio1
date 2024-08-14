import React from 'react';
import './About.css';

function About() {
  return (
    <section
      className="about"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sung.jpg)` }}
    >
      <h2>About Me</h2>
      <div className="profile">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpg`}
          alt="Profile"
          className="profile-img"
        />
        <div className="profile-info">
          <p>
            <span>Hello! I am Umesh Krishna Rao.V, a passionate developer with a love for creating dynamic web applications.</span>
            <span>Proficient in programming languages such as Java, C, Python, and JavaScript.</span>
            <span>Experienced in building web applications using React.js, Node.js, Express.js, and Bootstrap.</span>
            <span>Skilled in database management with SQL and MongoDB.</span>
            <span>Well-versed in MS Office Suite and utilizing tools like GitHub, Visual Studio, and Jupyter Notebook for development.</span>
            <span>Possess a strong foundation in IoT with hands-on experience in Arduino and Raspberry Pi.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

