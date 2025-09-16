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
    { icon: <SiTensorflow />, label: 'TensorFlow' },
    { icon: <SiBlender />, label: 'Blender' },
    { icon: <SiTableau />, label: 'Tableau' },
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
            <div className="tech-icons-scroll" aria-hidden="true">
              {[...techIcons, ...techIcons, ...techIcons].map((item, index) => (
                <div key={`tech-${index}`} className="tech-icon">
                  {React.cloneElement(item.icon, { 'aria-hidden': 'true' })}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#about" aria-label="About section">About</a>
          <a href="#skills" aria-label="Skills section">Skills</a>
          <a href="#projects" aria-label="Projects section">Projects</a>
          <a href="#experience" aria-label="Experience section">Experience</a>
          <a href="#contact" aria-label="Contact section">Contact</a>
        </nav>

        {/* Social Links */}
        <div className="social-links">
          <a 
            href="https://github.com/guruprasad-007" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub className="social-icon" />
          </a>
          <a 
            href="https://www.linkedin.com/in/guru-prasad-818116254/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a 
            href="https://www.instagram.com/iam_jb_guru" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram profile"
          >
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