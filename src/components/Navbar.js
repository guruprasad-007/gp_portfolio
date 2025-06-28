import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo-container">
          <a href="#home" className="logo-link">
            <img 
              src={`${process.env.PUBLIC_URL}/GURU.jpg`} 
              alt="Guru Prasad Logo" 
              className="logo-image" 
            />
            <span className="logo-text">Guru Prasad</span>
          </a>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#experience" onClick={toggleMenu}>Experience</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;