import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: 90 },
        { name: "C/C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Flask", level: 80 }
      ]
    },
    {
      category: "Data Science & ML",
      items: [
        { name: "Pandas/Numpy", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Power BI", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <div className="skills-row">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3>{skillCategory.category}</h3>
              <div className="skills-list">
                {skillCategory.items.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;