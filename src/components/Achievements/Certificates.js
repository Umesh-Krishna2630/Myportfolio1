import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Achievements.css';

function Certificates() {
  const { type } = useParams();

  const certificates = {
    coursera: [
      { name: 'Cloud Computing Basics (Cloud 101)', imgSrc: `${process.env.PUBLIC_URL}/certificates/cloud_corse.jpg` },
      { name: 'Machine Learning Foundations:A Case Study Approach', imgSrc: '/certificates/machine.jpg' },
      { name: 'Secure Full Stack MEAN Developer', imgSrc: '/certificates/FULL_STACK.jpg' },
      { name: 'Developing Front-End Apps with React', imgSrc: '/certificates/react.jpg' },
      { name: 'Python for Data Science, AI & Development', imgSrc: '/certificates/pyton ai.jpg' },
      { name: 'Prompt Engineering for ChatGPT', imgSrc: '/certificates/Prompt.jpg' },
    ],
    google: [
      { name: 'Foundations of Business Intelligence', imgSrc: '/certificates/business google.jpg' },
      { name: 'Technical Support Fundamentals', imgSrc: '/certificates/technical.jpg' },
      { name: 'System Administration and IT Infrastructure Services', imgSrc: '/certificates/sysadmin.jpg' },
    ],
    edx: [
      { name: 'Machine Learning with Python', imgSrc: '/certificates/edx machine.jpg' },
    ],
  };

  return (
    <section className="certificates">
      <h2>Certificates for {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <ul>
        {certificates[type]?.map((certificate, index) => (
          <li key={index}>
            <Link to={`/certificates/${type}/${index}`}>{certificate.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/achievements" className="back-button">Back to Achievements</Link>
    </section>
  );
}

export default Certificates;
