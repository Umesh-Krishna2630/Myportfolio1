import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Achievements.css';

function CertificateDetails() {
  const { type, id } = useParams();

  const certificates = {
    coursera: [
      { name: 'Cloud Computing Basics (Cloud 101)', imgSrc: '/certificates/cloud_corse.jpg' },
      { name: 'Machine Learning Foundations:A Case Study Approach', imgSrc: '/certificates/machine.jpg' },
      { name: 'Secure Full Stack MEAN Developer', imgSrc: '/certificates/FULL_STACK.jpg' },
      { name: 'Developing Front-End Apps with React', imgSrc: '/certificates/react.jpg' },
      { name: 'Python for Data Science, AI & Development', imgSrc: '/certificates/pyton_ai.jpg' },
      { name: 'Prompt Engineering for ChatGPT', imgSrc: '/certificates/Prompt.jpg' },
      { name: 'Foundations of Cybersecurity', imgSrc: '/certificates/cyber.jpg' },
    ],
    google: [
      { name: 'Foundations of Business Intelligence', imgSrc: '/certificates/business_google.jpg' },
      { name: 'Technical Support Fundamentals', imgSrc: '/certificates/technical.jpg' },
      { name: 'System Administration and IT Infrastructure Services', imgSrc: '/certificates/sysadmin.jpg' },
    ],
    edx: [
      { name: 'Machine Learning with Python', imgSrc: '/certificates/edx_machine.jpg' },
    ],
  };

  const certificate = certificates[type][id];

  return (
    <div className="certificate-details">
      <h2>{certificate.name}</h2>
      <img src={certificate.imgSrc} alt={certificate.name} />
      <Link to={`/certificates/${type}`} className="back-button">Back</Link>
    </div>
  );
}

export default CertificateDetails;
