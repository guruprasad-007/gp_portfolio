import React, { useState, useRef } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFileDownload } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs.sendForm(
      'service_uwcua6m',
      'template_2b6sitv',
      form.current,
      'Dy_Vo8CdmAmtg4r_5'
    )
    .then((result) => {
      setStatus({
        submitted: true,
        success: true,
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    })
    .catch((error) => {
      setStatus({
        submitted: true,
        success: false,
        message: 'Failed to send message. Please try again.'
      });
      setLoading(false);
    });
  };

  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = `${process.env.PUBLIC_URL}/GuruPrasad_Resume.pdf`;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'GuruPrasad_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>jbguruprasad17@gmail.com</span>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <span>+91 8247319091</span>
            </div>
            <button className="resume-btn" onClick={handleDownloadResume}>
              <FaFileDownload className="icon" />
              <span>Download Resume</span>
            </button>
            <div className="social-links">
              <a href="https://github.com/guruprasad-007" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/guru-prasad-818116254/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
          
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            
            {status.submitted && (
              <div className={`status-message ${status.success ? 'success' : 'error'}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;