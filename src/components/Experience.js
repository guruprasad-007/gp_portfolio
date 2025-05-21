import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Indian Space Research Organization (ISRO)",
      period: "Jun 2024 – Jul 2024",
      description: [
        "Architected a Binary File Seeding Application with Tkinter GUI for processing binary data files",
        "Developed a Pressure Prediction model using Polynomial Regression with 85% accuracy",
        "Implemented data preprocessing including datetime conversion and outlier detection using IQR"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Prodigy InfoTech",
      period: "Nov 2023",
      description: [
        "Completed a 1-month Machine Learning internship with outstanding remarks",
        "Worked on ML tasks focused on practical data preprocessing and model building",
        "Gained hands-on exposure to industry use cases of machine learning"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "IC Pro Solution Pvt. Ltd",
      period: "May 2023 – Jul 2023",
      description: [
        "Gained expertise in industry-standard ML tools (TensorFlow, Scikit-learn, PyTorch)",
        "Implemented efficient ML pipelines emphasizing scalability and business solutions",
        "Collaborated on real-world applications of data preprocessing and feature engineering"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-subtitle">My career journey and accomplishments</div>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <div className="experience-meta">
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>
                      <span className="bullet">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;