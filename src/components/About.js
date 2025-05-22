import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>

      <div className="about-grid container">
        {/* Left Text Section */}
        <div className="about-details">
          <p className="about-paragraph">
            I’m Guru Prasad, a curious Computer Science explorer who codes by day and animates in Blender by night—because why not bring both logic and imagination to life? Whether I’m training machine learning models, building full-stack apps, or creating 3D animations that might just make your screen do a little happy dance, I love turning tricky problems into clever, creative solutions (often fueled by coffee and the occasional “why isn’t this working?!” moment).  
            <br /><br />
            I believe in writing clean code, training smart models, crafting eye-catching animations, and occasionally naming variables after food (because who doesn’t love a well-fed algorithm?).  
            <br /><br />
            Welcome to the digital playground where curiosity meets caffeine, creativity runs wild, and a little bit of animation adds extra sparkle.
          </p>

          <div className="personal-info">
            <div className="info-item"><span className="info-label">Name:</span> Guru Prasad</div>
            <div className="info-item"><span className="info-label">Email:</span> jbguruprasad17@gmail.com</div>
            <div className="info-item"><span className="info-label">Phone:</span> +91 8247319091</div>
            <div className="info-item"><span className="info-label">Education:</span> BE Computer Science Engineering</div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="about-image">
  <img
    src={`${process.env.PUBLIC_URL}/profile.jpg`} 
    alt="Guru Prasad"
    className="profile-image"
    onError={(e) => {
      e.target.src = 'https://via.placeholder.com/350';
    }}
  />
</div>
      </div>
    </section>
  );
};

export default About;
