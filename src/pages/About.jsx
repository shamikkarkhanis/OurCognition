import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      {/* Highlights Section (Three Columns) */}
      <section className="highlights-section">
        <div className="highlight">
          <h2>What We Stand For</h2>
          <p>
            We’re dedicated to bridging the gap between cutting-edge neuroscience
            research and accessible public knowledge.
          </p>
        </div>
        <div className="highlight">
          <h2>Our Mission</h2>
          <p>
            Provide interactive timelines and heatmaps that showcase how cognitive
            disorders affect the brain, fostering deeper understanding and empathy.
          </p>
        </div>
        <div className="highlight">
          <h2>Our Vision</h2>
          <p>
            We believe that through immersive visualization and data-driven insights,
            anyone can explore the complexities of the human brain and help advance
            cognitive science.
          </p>
        </div>
      </section>
    </div>
  );
}
