import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Achievements.css';

function CertificateDetails() {
  const { type, id } = useParams();

  const certificates = {
  coursera: [
    { name: 'Cloud Computing Basics (Cloud 101)', imgSrc: `${process.env.PUBLIC_URL}/certificates/cloud_corse.jpg` },
    { name: 'Machine Learning Foundations: A Case Study Approach', imgSrc: `${process.env.PUBLIC_URL}/certificates/machine.jpg` },
    { name: 'Secure Full Stack MEAN Developer', imgSrc: `${process.env.PUBLIC_URL}/certificates/FULL_STACK.jpg` },
    { name: 'Developing Front-End Apps with React', imgSrc: `${process.env.PUBLIC_URL}/certificates/react.jpg` },
    { name: 'Python for Data Science, AI & Development', imgSrc: `${process.env.PUBLIC_URL}/certificates/pyton_ai.jpg` },
    { name: 'Prompt Engineering for ChatGPT', imgSrc: `${process.env.PUBLIC_URL}/certificates/Prompt.jpg` },
  ],
  google: [
    { name: 'Foundations of Business Intelligence', imgSrc: `${process.env.PUBLIC_URL}/certificates/business_google.jpg` },
    { name: 'Technical Support Fundamentals', imgSrc: `${process.env.PUBLIC_URL}/certificates/technical.jpg` },
    { name: 'System Administration and IT Infrastructure Services', imgSrc: `${process.env.PUBLIC_URL}/certificates/sysadmin.jpg` },
  ],
  edx: [
    { name: 'Machine Learning with Python', imgSrc: `${process.env.PUBLIC_URL}/certificates/edx_machine.jpg` },
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
