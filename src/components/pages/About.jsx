import React from 'react';
import '../../App.css';

export default function About() {
  return (
    <div className='about-container'>
      <h1 className='about-heading'>About OurCognition</h1>
      <p className='about-description'>
        OurCognition is an innovative web application developed as part of an
        independent study research project by Rensselaer Polytechnic Institute's
        Cognitive Science Department. The platform aims to offer a comprehensive
        visual understanding of how cognitive disorders and diseases affect the brain.
      </p>
      <p className='about-description'>
        Users can explore a timeline for each disorder, highlighting the regions of
        the brain impacted by the disease. In addition, the application connects these
        insights to real-world consequences for patients, helping users better understand
        the complexities of cognitive diseases.
      </p>
      <p className='about-description'>
        Developed by <strong>Shamik Karkhanis</strong> and <strong>Nico Diaz</strong>,
        with guidance from faculty advisor <strong>Dr. Benjamin Weissman</strong>, 
        OurCognition hopes to provide a resource for both educational and research purposes.
        Our goal is to create a versatile tool for visualizing cognitive disorders, empowering
        individuals to deepen their understanding of the neurological underpinnings of various diseases.
      </p>
      <h2 className='about-features-heading'>Key Features:</h2>
      <ul className='about-features-list'>
        <li>Interactive timeline for each cognitive disorder</li>
        <li>Visual representations of brain regions affected by disease</li>
        <li>Information on how cognitive disorders impact information processing</li>
        <li>Real-world implications for patients and healthcare professionals</li>
      </ul>
      <h2 className='about-future-heading'>Future Plans:</h2>
      <p className='about-description'>
        OurCognition continues to evolve, with future updates focused on enhancing interactivity,
        refining visualizations, and expanding content to meet the needs of a wider audience. We aim to
        make it a leading educational tool for those interested in the science of the brain.
      </p>
    </div>
  );
}
