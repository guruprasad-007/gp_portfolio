import React from 'react';
import './Footer.css';
import {
  FaGithub, FaLinkedin, FaReact, FaJava,
  FaDatabase, FaFileExcel,
  FaInstagram
} from 'react-icons/fa';
import {
  SiTableau, SiBlender, SiTensorflow
} from 'react-icons/si';

const Footer = () => {
  const techIcons = [
    { icon: <FaReact />, label: 'React' },
    { icon: <SiTensorflow />, label: 'Machine Learning' },
    { icon: <SiBlender />, label: 'Blender' },
    { icon: <SiTableau />, label: 'Power BI' },
    { icon: <FaFileExcel />, label: 'Excel' },
    { icon: <FaDatabase />, label: 'SQL' },
    { icon: <FaJava />, label: 'Java' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Tech Icons Scroll Section */}
        <div className="tech-icons-container">
          <div className="tech-icons-wrapper">
            <div className="tech-icons-scroll">
              {[...techIcons, ...techIcons, ...techIcons].map((item, index) => (
                <div key={index} className="tech-icon">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/guruprasad-007" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://linkedin.com/in/guru-prasad" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.instagram.com/iam_jb_guru" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon"/>
          </a>
        </div>

        <div className="copyright">
          &copy; {new Date().getFullYear()} Guru Prasad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;