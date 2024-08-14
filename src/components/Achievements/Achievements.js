import React from 'react';
import { Link } from 'react-router-dom';
import './Achievements.css';

function Achievements() {
  const achievements = [
    { title: 'Coursera', description: 'Completed multiple courses on Coursera.', route: '/certificates/coursera' },
    { title: 'Google', description: 'Completed multiple courses in Google.', route: '/certificates/google' },
    { title: 'EDX', description: 'Completed multiple courses on EDX.', route: '/certificates/edx' },
  ];

  return (
    <section className="achievements">
      <h2>My Achievements</h2>
      <div className="achievement-list">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
            <Link to={achievement.route} className="view-certificates-button">
              View Certificates
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
