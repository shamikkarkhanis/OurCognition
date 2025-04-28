import React from 'react';
import '../styles/Contact.css';
import backgroundImage from '../assets/simple_background.jpeg'; // Adjust path if needed

export default function Contact() {
  return (
    <div className="contact-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you. Whether you have a question, an idea, or just want to say hello — let's connect.
        </p>

        <button className="btn">
          <a href="mailto:ourcognition@gmail.com">ourcognition@gmail.com</a>
        </button>

        {/* Contributors section */}
        <div className="contributors-section">
          <div className="contributors-list">
            <div className="contributor-card">
              <h3>Shamik Karkhanis</h3>
              <p>karkhs@rpi.edu</p>
            </div>
            <div className="contributor-card">
              <h3>Nico Diaz</h3>
              <p>diazn@rpi.edu</p>

            </div>
            <div className="contributor-card">
              <h3>Dr. Benjamin Weissman</h3>
              <p>Faculty Adviser: weissb2@rpi.edu</p>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
