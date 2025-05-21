import React from 'react';
import './Projects.css';

const Projects = () => {
  const dataAnalysisProjects = [
    {
      title: "Food and Beverage Sales Analysis Dashboard",
      description: "Interactive Power BI dashboard analyzing sales performance",
      technologies: ["Power BI", "SQL", "Excel", "Data Analysis"],
      details: [
        "Breakdowns of revenue and orders by channel",
        "Salesperson performance metrics",
        "Actionable insights through data visualization"
      ]
    },
    {
      title: "Air Quality Report Dashboard",
      description: "Power BI dashboard analyzing air quality metrics",
      technologies: ["Power BI", "SQL", "Data Visualization"],
      details: [
        "Visualized key air quality indicators",
        "City-wise AQI distribution",
        "Real-time environmental insights"
      ]
    }
  ];

  const mlProjects = [
    {
      title: "House Price Prediction",
      description: "ML model to predict house prices",
      technologies: ["Python", "Pandas", "Linear Regression"],
      details: [
        "Location, square footage as features",
        "Visualized feature importance",
        "87% prediction accuracy"
      ]
    },
    {
      title: "Cat vs Dog Classification",
      description: "Image classification using SVM",
      technologies: ["Python", "OpenCV", "SVM"],
      details: [
        "Preprocessed images",
        "Trained SVM model",
        "90% accuracy"
      ]
    },
    {
      title: "Fashion Forecast",
      description: "Predict upcoming fashion trends using ML",
      technologies: ["Python", "TensorFlow", "Pandas"],
      details: [
        "Analyzed historical fashion data",
        "Implemented trend prediction model",
        "85% accuracy on validation set"
      ]
    },
    {
      title: "Sentiment Analysis",
      description: "Analyze product reviews sentiment",
      technologies: ["Python", "NLTK", "Scikit-learn"],
      details: [
        "Processed natural language text",
        "Built classification model",
        "82% accuracy on test data"
      ]
    }
  ];

  const fullstackProjects = [
    {
      title: "Portfolio Website",
      description: "Modern portfolio website",
      technologies: ["React.js", "CSS"],
      details: [
        "Categorized projects",
        "Responsive layout",
        "Interactive UI"
      ]
    }
  ];

  const renderProjects = (title, projects) => (
    <div className="project-category">
      <h2>{title}</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <ul>
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="projects-section" id="projects">
      <h1>Featured Projects</h1>
      {renderProjects("Machine Learning Projects", mlProjects)}
      {renderProjects("Data Analysis Projects", dataAnalysisProjects)}
      {renderProjects("Fullstack Projects", fullstackProjects)}
    </section>
  );
};

export default Projects;