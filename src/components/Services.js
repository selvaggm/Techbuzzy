import React, { useState } from 'react';
import '../Styles/Services.css';
import '../Styles/GlobalStyles.css';
import ContactModal from './ContactModal';

// Import SVG and image assets
import WebDevSvg from '../assets/images/web_dev.svg';
import CloudSvg from '../assets/images/cloud.svg';
import AiSvg from '../assets/images/ai.svg';
import CyberSvg from '../assets/images/cyber.svg';
import QaImage from '../assets/images/qa.png';
import corporate from '../assets/images/meeting.png'

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 1,
      icon: WebDevSvg,
      type: 'svg',
      iconClass: 'icon-webdev',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      features: [
        'Website & Web App Development (React, Angular, Node.js)',
        'Enterprise Software Solutions (.NET, Java, Python)',
        'Mobile App Development (iOS, Android, Flutter)',
        'API & Microservices Development',
        'Maintenance & Support'
      ],
      tech: ['React', 'Node.js', 'Python', 'Django', '.NET', 'Flutter', 'MySQL', 'MongoDB']
    },
    {
      id: 2,
      icon: CloudSvg,
      type: 'svg',
      iconClass: 'icon-cloud',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure for modern applications',
      features: [
        'Cloud Architecture & Consulting',
        'Cloud Migration & Optimization',
        'DevOps & CI/CD Automation',
        'Data Warehousing & Analytics (Snowflake, BigQuery, Redshift)',
        'Backup & Disaster Recovery'
      ],
      tech: ['AWS', 'Azure', 'GCP', 'Snowflake', 'Terraform', 'Docker', 'Kubernetes']
    },
    {
      id: 3,
      icon: QaImage,
      type: 'image',
      iconClass: 'icon-qa',
      title: 'Software Testing & QA',
      description: 'Comprehensive quality assurance and testing services',
      features: [
        'Manual & Automation Testing',
        'Functional & Regression Testing',
        'Performance & Load Testing',
        'API & Integration Testing',
        'Security & Penetration Testing',
        'Mobile App Testing'
      ],
      tech: ['Selenium', 'JMeter', 'Postman', 'Playwright', 'Cypress', 'Jenkins']
    },
    {
      id: 4,
      icon: AiSvg,
      type: 'svg',
      iconClass: 'icon-ai',
      title: 'AI & Data Services',
      description: 'Advanced analytics and machine learning solutions',
      features: [
        'Predictive Analytics & Machine Learning',
        'NLP (Chatbots, Sentiment Analysis)',
        'Computer Vision',
        'AI-based Process Automation',
        'Data Engineering & Data Visualization'
      ],
      tech: ['Python', 'TensorFlow', 'PyTorch', 'Power BI', 'Snowflake', 'Databricks']
    },
    {
      id: 5,
      icon: CyberSvg,
      type: 'svg',
      iconClass: 'icon-cyber',
      title: 'Cyber Security & Networking',
      description: 'Comprehensive security and network solutions',
      features: [
        'Network Security & Firewall Management',
        'Vulnerability Assessment & Penetration Testing (VAPT)',
        'Cloud Security (AWS, Azure, GCP)',
        'Endpoint Protection & 24/7 Threat Monitoring',
        'SIEM & Log Analytics for incident detection',
        'Business Continuity & Disaster Recovery (BCP/DR)',
        'Network Design, Configuration & Performance Optimization'
      ],
      tech: ['AWS Security', 'Azure Security', 'Fortinet', 'Palo Alto', 'Splunk']
    },
    {
      id: 6,
      icon: corporate,
      type: 'png',
      iconClass: 'icon-cyber',
      title: 'Corporate Gifting Solutions:',
      description: 'Premium, customized corporate gifts for branding, events & employee engagement',
      features: [
        'Custom-branded corporate gifts',
        'Employee onboarding & festival gift hampers',
        'Premium tech gifts ',
        'Client appreciation & event gifting',
        'Bulk order management & doorstep delivery',
        'Personalized packaging & logo branding',
        'Exclusive corporate gift curation for special occasions'
      ],
      tech: []
    }
  ];

  return (
    <>
      <section className="services" id="services">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            Cutting-edge technology solutions designed to accelerate your business growth 
            and deliver measurable results
          </p>
        </div>

        <div className="services-container">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className={`icon-img ${service.iconClass}`}
                />
              </div>
              
              <h3>{service.title}</h3>
              <p style={{ color: '#ffffffff', marginBottom: '1rem', fontSize: '0.95rem' }}>
                {service.description}
              </p>

              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

             {
              // eslint-disable-next-line eqeqeq
              service.id != 6 && service.tech.length > 0 && (
                <>
                 <div className="tech-label">Tools & Technologies</div>
              <div className="tech-tags">
                {service.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
                </>
              )
             }
            </div>
          ))}
        </div>
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default Services;
