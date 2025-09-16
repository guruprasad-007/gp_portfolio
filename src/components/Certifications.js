import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certificationsByYear = {
    '2025': [
      {
        title: '日本語能力試験 (JLPT-N4)',
        issuer: 'Japan Foundation',
        date: 'Jul 2025',
        credential: 'Certificate of Achievement',
        link: 'https://www.linkedin.com/posts/guru-prasad-818116254_gurus-jlpt-n4-result-activity-7367992385387036672-P6vF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6qShQBRWnwJh0pwGYB3oH8NLAYju0oqhk',
        logo: 'japan'
      },
      {
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco',
        date: 'Apr 2025',
        credential: '',
        link: 'https://www.credly.com/badges/4dac327e-c4ee-49f7-9708-48634d183b74/linked_in_profile',
        logo: 'C'
      },
      {
        title: 'Python Essentials 1',
        issuer: 'Cisco',
        date: 'Apr 2025',
        credential: '',
        link: 'https://www.credly.com/badges/3671bdc6-fafe-46b5-be18-3dba15882030/linked_in_profile',
        logo: 'C'
      },
      {
        title: 'CCNA: Enterprise Networking, Security, and Automation',
        issuer: 'Cisco',
        date: 'May 2025',
        credential: '',
        link: '#',
        logo: 'C'
      },
      {
        title: 'CCNA: Introduction to Networks',
        issuer: 'Cisco',
        date: 'May 2025',
        credential: '',
        link: '#',
        logo: 'C'
      },
      {
        title: 'CCNA: Switching, Routing, and Wireless Essentials',
        issuer: 'Cisco',
        date: 'May 2025',
        credential: '',
        link: '#',
        logo: 'C'
      }
    ],
    '2024': [
      {
        title: 'Academic Process Mining Fundamentals',
        issuer: 'Celonis',
        date: 'Dec 2024',
        credential: '',
        link: 'https://www.credly.com/badges/d489498e-8db1-4099-bf9c-b3b304f322bf/linked_in_profile',
        logo: 'C'
      },
      {
        title: 'UiPath Academy Automation Explorer Training',
        issuer: 'UiPath',
        date: 'Mar 2024',
        credential: 'Credential ID 123225790',
        link: 'https://credentials.uipath.com/d0be1bf0-2168-4b71-af53-8cd253bc9ed1#acc.OA2nZ3yi',
        logo: 'U'
      },
      {
        title: 'Blockchain Basics',
        issuer: 'University at Buffalo',
        date: 'Jan 2024',
        credential: '',
        link: 'block_chain.pdf',
        logo: 'U'
      },
      {
        title: 'Build a full website using Wordpress',
        issuer: 'Coursera',
        date: 'Jan 2024',
        credential: '',
        link: 'https://www.linkedin.com/in/guru-prasad-818116254/details/certifications/',
        logo: 'C'
      },
      {
        title: 'Cybersecurity Essentials',
        issuer: 'IBM',
        date: 'Jan 2024',
        credential: '',
        link: 'https://www.linkedin.com/in/guru-prasad-818116254/details/certifications/',
        logo: 'I'
      },
      {
        title: 'Web development in flask',
        issuer: 'Coursera',
        date: 'Jan 2024',
        credential: '',
        link: 'https://www.linkedin.com/in/guru-prasad-818116254/details/certifications/',
        logo: 'C'
      }
    ],
    '2023': [
      {
        title: 'Introduction to Android Mobile Application Development',
        issuer: 'Meta',
        date: 'Nov 2023',
        credential: 'Credential ID 8QL8WWYPS6FS',
        link: 'https://www.coursera.org/account/accomplishments/verify/8QL8WWYPS6FS',
        logo: 'M'
      },
      {
        title: 'Cybersecurity Essentials',
        issuer: 'Cisco',
        date: 'Feb 2023',
        credential: '',
        link: 'https://www.credly.com/badges/2bbb5489-d47a-4ec8-99e4-14e65e9b2253/linked_in_profile',
        logo: 'C'
      }
    ]
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        {/* Main Section Title */}
        <div className="section-title">
          <h1>Licenses & Certifications</h1>
          <div className="title-underline"></div>
          <div className="title-line"></div>
        </div>

        {Object.entries(certificationsByYear).map(([year, certs], yearIndex) => (
          <div key={year} className="certification-year-group">
            {/* Year Header with Timeline */}
            <div className="year-header">
              <div className="year-header-content">
                <div className="year-dot"></div>
                <h2 className="year-title">{year}</h2>
              </div>
              <div className="year-line"></div>
            </div>
            
            {/* Certification Cards Grid */}
            <div className="certifications-grid">
              {certs.map((cert, index) => (
                <div key={index} className="certification-card">
                  {/* Card Header */}
                  <div className="card-header">
                    <div className="issuer-logo">
                      {cert.logo === 'japan' ? (
                        <span className="japanese-logo-text">日</span>
                      ) : (
                        cert.logo
                      )}
                    </div>
                    <div className="card-header-content">
                      <h3 className="cert-title">{cert.title}</h3>
                      <p className="cert-issuer">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    <p className="cert-date">{cert.date}</p>
                    {cert.credential && (
                      <p className="cert-credential">{cert.credential}</p>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="card-footer">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-credential-btn"
                    >
                      {cert.link.endsWith('.pdf') ? 'VIEW PDF' : 'VIEW CREDENTIAL'}
                      <svg 
                        className="arrow-icon" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Vertical Timeline Line */}
            {yearIndex !== Object.keys(certificationsByYear).length - 1 && (
              <div className="timeline-line"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;