import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>
            We’re here to answer your questions and explore new opportunities. Let’s build something amazing together!
          </p>
          <a href="mailto:ourcognition@gmail.com" className="contact-link">
            ourcognition@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
