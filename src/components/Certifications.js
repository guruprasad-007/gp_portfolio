import React from 'react';
import './Certifications.css';

const Certifications = () => {
  // Group certifications by year (newest first)
  const certificationsByYear = {
    '2025': [
      {
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco',
        date: 'Apr 2025',
        credential: '',
        link: 'https://www.credly.com/badges/4dac327e-c4ee-49f7-9708-48634d183b74/linked_in_profile',
        logo: 'cisco'
      },
      {
        title: 'Python Essentials 1',
        issuer: 'Cisco',
        date: 'Apr 2025',
        credential: '',
        link: 'https://www.credly.com/badges/3671bdc6-fafe-46b5-be18-3dba15882030/linked_in_profile',
        logo: 'cisco'
      }
    ],
    '2024': [
      {
        title: 'Academic Process Mining Fundamentals',
        issuer: 'Celonis',
        date: 'Dec 2024',
        credential: '',
        link: 'https://www.credly.com/badges/d489498e-8db1-4099-bf9c-b3b304f322bf/linked_in_profile',
        logo: 'celonis'
      },
      {
        title: 'UiPath Academy Automation Explorer Training',
        issuer: 'UiPath',
        date: 'Mar 2024',
        credential: 'Credential ID 123225790',
        link: 'https://credentials.uipath.com/d0be1bf0-2168-4b71-af53-8cd253bc9ed1#acc.OA2nZ3yi',
        logo: 'uipath'
      },
      {
        title: 'Blockchain Basics',
        issuer: 'University at Buffalo',
        date: 'Jan 2024',
        credential: 'https://www.linkedin.com/in/guru-prasad-818116254/details/certifications/',
        link: 'block_chain.pdf',
        logo: 'buffalo'
      },
      {
        title: 'Build a full website using Wordpress',
        issuer: 'Coursera',
        date: 'Jan 2024',
        credential: '',
        link: 'https://www.linkedin.com/in/guru-prasad-818116254/details/certifications/',
        logo: 'coursera'
      },
      {
        title: 'Cybersecurity Essentials',
        issuer: 'IBM',
        date: 'Jan 2024',
        credential: '',
        link: 'https://www.linkedin.com/in/guru-prasad-818116254/details/certifications/',
        logo: 'ibm'
      },
      {
        title: 'Web development in flask',
        issuer: 'Coursera',
        date: 'Jan 2024',
        credential: '',
        link: 'https://www.linkedin.com/in/guru-prasad-818116254/details/certifications/',
        logo: 'coursera'
      }
    ],
    '2023': [
      {
        title: 'Introduction to Android Mobile Application Development',
        issuer: 'Meta',
        date: 'Nov 2023',
        credential: 'Credential ID 8QL8WWYPS6FS',
        link: 'https://www.coursera.org/account/accomplishments/verify/8QL8WWYPS6FS',
        logo: 'meta'
      },
      {
        title: 'Cybersecurity Essentials',
        issuer: 'Cisco',
        date: 'Feb 2023',
        credential: '',
        link: 'https://www.credly.com/badges/2bbb5489-d47a-4ec8-99e4-14e65e9b2253/linked_in_profile',
        logo: 'cisco'
      }
    ]
  };

  // Logo background colors - monochrome theme
  const logoColors = {
    'cisco': '#222',
    'celonis': '#333',
    'uipath': '#444',
    'buffalo': '#555',
    'coursera': '#666',
    'ibm': '#777',
    'meta': '#888'
  };

  // Styles
  const styles = {
    section: {
      padding: '80px 0',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    },
    container: {
      width: '90%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      textAlign: 'right',
      marginBottom: '50px',
      color: '#222',
      position: 'relative',
      fontWeight: 600,
      letterSpacing: '-0.5px',
      paddingBottom: '15px',
      borderBottom: '3px solid #444',
      width: 'fit-content',
      marginLeft: 'auto'
    },
    yearGroup: {
      marginBottom: '60px',
      position: 'relative'
    },
    yearHeading: {
      fontSize: '1.8rem',
      marginBottom: '25px',
      color: '#333',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 500
    },
    yearDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#555',
      marginRight: '15px',
      display: 'inline-block'
    },
    yearLine: {
      flexGrow: 1, 
      height: '1px', 
      backgroundColor: '#999',
      marginLeft: '15px'
    },
    certsRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '30px'
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '4px',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.07)',
      padding: '25px',
      transition: 'all 0.3s ease',
      borderLeft: '4px solid #444',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px'
    },
    logo: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      marginRight: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)'
    },
    certTitle: {
      fontSize: '1.1rem',
      fontWeight: 600,
      marginBottom: '5px',
      color: '#222',
      letterSpacing: '-0.2px'
    },
    issuer: {
      fontSize: '0.9rem',
      color: '#555',
      fontWeight: 500
    },
    cardDetails: {
      marginTop: 'auto',
      marginBottom: '20px',
      paddingTop: '15px',
      borderTop: '1px solid #eee'
    },
    date: {
      fontSize: '0.9rem',
      color: '#666',
      marginBottom: '5px'
    },
    credential: {
      fontSize: '0.85rem',
      color: '#777',
      fontStyle: 'italic'
    },
    viewBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#333',
      fontSize: '0.9rem',
      fontWeight: 600,
      textDecoration: 'none',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      padding: '8px 0',
      borderBottom: '2px solid transparent'
    },
    arrow: {
      marginLeft: '6px'
    }
  };

  // Media query handling with window width
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust styles based on screen width
  if (windowWidth <= 768) {
    styles.certsRow.gridTemplateColumns = '1fr';
    styles.sectionTitle.textAlign = 'center';
    styles.sectionTitle.marginLeft = 'auto';
    styles.sectionTitle.marginRight = 'auto';
  }

  return (
    <section id="certifications" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Licenses & Certifications</h2>
        
        {Object.entries(certificationsByYear).map(([year, certs]) => (
          <div key={year} style={styles.yearGroup}>
            <h3 style={styles.yearHeading}>
              <span style={styles.yearDot}></span>
              {year}
              <span style={styles.yearLine}></span>
            </h3>
            <div style={styles.certsRow}>
              {certs.map((cert, index) => (
                <div 
                  key={index} 
                  style={styles.card} 
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.12)';
                    e.currentTarget.style.borderLeft = '4px solid #000';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.07)';
                    e.currentTarget.style.borderLeft = '4px solid #444';
                  }}
                >
                  <div style={styles.cardHeader}>
                    <div style={{...styles.logo, backgroundColor: logoColors[cert.logo]}}>
                      {cert.issuer.charAt(0)}
                    </div>
                    <div>
                      <h4 style={styles.certTitle}>{cert.title}</h4>
                      <p style={styles.issuer}>{cert.issuer}</p>
                    </div>
                  </div>
                  <div style={styles.cardDetails}>
                    <p style={styles.date}>{cert.date}</p>
                    {cert.credential && <p style={styles.credential}>{cert.credential}</p>}
                  </div>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.viewBtn}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#000';
                      e.currentTarget.style.borderBottom = '2px solid #000';
                      e.currentTarget.querySelector('.arrow').style.transform = 'translateX(4px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = '#333';
                      e.currentTarget.style.borderBottom = '2px solid transparent';
                      e.currentTarget.querySelector('.arrow').style.transform = 'none';
                    }}
                  >
                    {cert.link.endsWith('.pdf') ? 'View PDF' : 'View Credential'}
                    <span className="arrow" style={styles.arrow}>→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;