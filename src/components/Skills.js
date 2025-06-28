import React from 'react';
import './Skills.css';
import { FaPython, FaJava } from 'react-icons/fa';
import { SiTensorflow, SiBlender } from 'react-icons/si';
import { BiData } from 'react-icons/bi';
import { MdWeb } from 'react-icons/md';

const Skills = () => {
  const skills = [
    {
      name: "Data Analytics",
      icon: <BiData className="skill-icon" />,
      description: "In-depth knowledge with Power BI, Tableau, and Python data analysis libraries. Created dashboards for business intelligence and research data visualization."
    },
    {
      name: "Machine Learning",
      icon: <SiTensorflow className="skill-icon" />,
      description: "I have hands-on experience in Machine Learning, especially in supervised learning techniques such as Linear Regression, Polynomial Regression, and Support Vector Machines (SVM). I’ve applied these methods to real-world problems, including a pressure prediction project and an image classification model."
    },
    {
      name: "Full Stack Development",
      icon: <MdWeb className="skill-icon" />,
      description: "Built complete web applications using React, Flask, and databases. Experience with both frontend design and backend architecture."
    },
    {
      name: "Python",
      icon: <FaPython className="skill-icon" />,
      description: "Python is my primary language for data analysis and machine learning projects. I am proficient in using libraries like pandas for data manipulation, NumPy for numerical operations, scikit-learn for model development, and Matplotlib/Seaborn for data visualization."
    },
    {
      name: "Java",
      icon: <FaJava className="skill-icon" />,
      description: "Alongside Python, I have a strong foundation in Java, especially in object-oriented programming concepts. I’ve used Java to implement core data structures, algorithms, and basic applications."
    },
    {
      name: "Blender",
      icon: <SiBlender className="skill-icon" />,
      description: "Created 3D animations and models for projects. Experience with rendering, texturing, and basic rigging."
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">This are some of my skills, and I'm always looking to learn more.</p>
          <p className="section-note">(Somewhat outdated, will update soon. Grad student life is very busy!)</p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                {skill.icon}
                <h3>{skill.name}</h3>
              </div>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;