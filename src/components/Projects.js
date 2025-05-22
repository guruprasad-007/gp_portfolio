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
      ],
      image: process.env.PUBLIC_URL + "/food.jpeg"
    },
    {
      title: "Air Quality Report Dashboard",
      description: "Power BI dashboard analyzing air quality metrics",
      technologies: ["Power BI", "SQL", "Data Visualization"],
      details: [
        "Visualized key air quality indicators",
        "City-wise AQI distribution",
        "Real-time environmental insights"
      ],
      image: process.env.PUBLIC_URL+"/smoke.jpg"
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
      ],
      image: process.env.PUBLIC_URL+"/house.jpg"
    },
    {
      title: "Cat vs Dog Classification",
      description: "Image classification using SVM",
      technologies: ["Python", "OpenCV", "SVM"],
      details: [
        "Preprocessed images",
        "Trained SVM model",
        "90% accuracy"
      ],
      image: process.env.PUBLIC_URL+"/catvsdog.jpeg"
    },
    {
      title: "Fashion Forecast",
      description: "Predict upcoming fashion trends using ML",
      technologies: ["Python", "TensorFlow", "Pandas"],
      details: [
        "Analyzed historical fashion data",
        "Implemented trend prediction model",
        "85% accuracy on validation set"
      ],
      image: process.env.PUBLIC_URL+"/fashion.jpeg"
    },
    {
      title: "Sentiment Analysis",
      description: "Analyze product reviews sentiment",
      technologies: ["Python", "NLTK", "Scikit-learn"],
      details: [
        "Processed natural language text",
        "Built classification model",
        "82% accuracy on test data"
      ],
      image: process.env.PUBLIC_URL+"/analysis.jpeg"
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
      ],
      image: process.env.PUBLIC_URL + "/port.jpeg"
    }
  ];

  const blenderProjects = [
    {
      title: "Perfume Product Animation",
      description: "3D product animation showcasing perfume bottle",
      technologies: ["Blender", "3D Animation", "Product Visualization"],
      details: [
        "Realistic material rendering",
        "Dynamic camera movements",
        "Professional product presentation"
      ],
      video: process.env.PUBLIC_URL+"/perfume.mp4",
      hasVideo: true
    },
    {
      title: "UI UX Animation",
      description: "Interactive interface animation design",
      technologies: ["Blender", "Motion Graphics", "UI Design"],
      details: [
        "Smooth transitions and interactions",
        "Modern interface elements",
        "Engaging user experience flow"
      ],
      video: process.env.PUBLIC_URL + "/uiux.mp4",
      hasVideo: true
    },
    {
      title: "Fantasy Character Animation",
      description: "Character rigging and animation",
      technologies: ["Blender", "Character Design", "Animation"],
      details: [
        "Complete character rigging",
        "Fluid movement animations",
        "Fantasy theme implementation"
      ],
      video: process.env.PUBLIC_URL+"/fantasy.mp4",
      hasVideo: true
    },
    {
      title: "Fractured Face",
      description: "Abstract 3D portrait with fracture effects",
      technologies: ["Blender", "3D Modeling", "Visual Effects"],
      details: [
        "Complex geometry manipulation",
        "Realistic fracture simulation",
        "Artistic visual composition"
      ],
      image: process.env.PUBLIC_URL+"/face_blue.jpg"
    },
    {
      title: "A Knight's Love",
      description: "Romantic medieval-themed 3D scene",
      technologies: ["Blender", "Scene Composition", "Lighting"],
      details: [
        "Detailed medieval environment",
        "Emotional storytelling through visuals",
        "Advanced lighting techniques"
      ],
      image: process.env.PUBLIC_URL+"/knight.jpg"
    }
  ];

  const renderProjects = (title, projects) => (
    <div className="project-category">
      <h2>{title}</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.hasVideo ? (
              <div className="project-media video-container">
                <video 
                  width="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  disableRemotePlayback
                  className="project-video"
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="project-media">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
            )}
            <div className="project-content">
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
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="projects-section" id="projects">
      <h1>Featured Projects</h1>
      {renderProjects("Blender Projects", blenderProjects)}
      {renderProjects("Machine Learning Projects", mlProjects)}
      {renderProjects("Data Analysis Projects", dataAnalysisProjects)}
      {renderProjects("Fullstack Projects", fullstackProjects)}
    </section>
  );
};

export default Projects;