import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>We Transform Cognitive Research</h1>
            <p>
              OurCognition is a groundbreaking platform that visualizes how
              various cognitive disorders impact the brain—helping researchers,
              educators, and the public deepen their understanding of human cognition.
            </p>
          </div>
        </div>
      </section>

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

      {/* Abstract Section */}
      <section className="abstract-section">
        <div className="abstract-overlay">
          <div className="abstract-content">
            <h2>Why OurCognition?</h2>
            <p>
              We combine scientific rigor with engaging design to make neuroscience
              approachable for everyone. Whether you’re a researcher, student, or
              simply curious about the brain, OurCognition offers a fresh, visual
              perspective on cognitive disorders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
