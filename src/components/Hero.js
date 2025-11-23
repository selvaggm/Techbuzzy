import React, { useState } from 'react';
import '../Styles/Hero.css';
import '../Styles/GlobalStyles.css';
import homeImg from '../assets/images/home_img.png';
import ContactModal from './ContactModal';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            Transforming Ideas into <span className="highlight">Digital Excellence</span>
          </h1>
          <p>
            With 7+ years of experience, we are one of Chennai’s fast-growing technology partners, delivering high-quality software, cloud, AI, cybersecurity, and testing services for businesses of all sizes.
            From startups to enterprises, we help organizations innovate, scale, and stay secure in a rapidly evolving digital world.
          </p>

          {/* New Who We Are Section */}
          <div className="who-we-are">
            <h2>Who We Are</h2>
            <p>
              We are a full-stack IT solutions company specializing in custom software development, enterprise applications, mobile apps, cloud engineering, cybersecurity, AI solutions, and end-to-end testing services.
            </p>
            <p>
              Our team of skilled engineers, architects, and consultants are dedicated to building solutions that are scalable, secure, user-centric, and aligned with your business goals.
            </p>
          </div>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              Start Your Project Today
            </button>
            <a href="services" style={{ textDecoration: 'none' }}>
              <button className="btn btn-secondary">
                View Our Services
              </button>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={homeImg} alt="Digital Solutions" />
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}


export default Hero;
