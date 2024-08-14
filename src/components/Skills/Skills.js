import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Skills.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Skills() {
  const data = [
    {
      skill: 'JavaScript',
      percentage: 70,
      chartData: {
        labels: ['JavaScript', 'Remaining'],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: ['#3498db', '#ecf0f1'],
            borderColor: ['#2980b9', '#bdc3c7'],
            borderWidth: 1,
          },
        ],
      },
    },
    {
      skill: 'React',
      percentage: 85,
      chartData: {
        labels: ['React', 'Remaining'],
        datasets: [
          {
            data: [85, 15],
            backgroundColor: ['#2ecc71', '#ecf0f1'],
            borderColor: ['#27ae60', '#bdc3c7'],
            borderWidth: 1,
          },
        ],
      },
    },
    {
      skill: 'CSS',
      percentage: 90,
      chartData: {
        labels: ['CSS', 'Remaining'],
        datasets: [
          {
            data: [90, 10],
            backgroundColor: ['#e74c3c', '#ecf0f1'],
            borderColor: ['#c0392b', '#bdc3c7'],
            borderWidth: 1,
          },
        ],
      },
    },
    {
      skill: 'IOT',
      percentage: 90,
      chartData: {
        labels: ['IOT', 'Remaining'],
        datasets: [
          {
            data: [90, 10],
            backgroundColor: ['#efe816', '#ecf0f1'],
            borderColor: ['#efe816', '#bdc3c7'],
            borderWidth: 1,
          },
        ],
      },
    },
    {
      skill: 'Java',
      percentage: 70,
      chartData: {
        labels: ['JAVA', 'Remaining'],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: ['#ca3faa', '#ecf0f1'],
            borderColor: ['#ca3faa', '#bdc3c7'],
            borderWidth: 1,
          },
        ],
      },
    },
    {
      skill: 'SQL',
      percentage: 80,
      chartData: {
        labels: ['SQL', 'Remaining'],
        datasets: [
          {
            data: [80, 20],
            backgroundColor: ['#3d7276', '#ecf0f1'],
            borderColor: ['#3d7276', '#bdc3c7'],
            borderWidth: 1,
          },
        ],
      },
    },
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {data.map((item, index) => (
          <div key={index} className="skill-item">
            <h3>{item.skill}</h3>
            <div className="chart-container">
              <Pie data={item.chartData} />
            </div>
          </div>
        ))}
      </div>
      <div className="soft-skills">
        <h3>Soft Skills</h3>
        <ul>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Problem-solving</li>
          <li>Adaptability</li>
          <li>Leadership</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
