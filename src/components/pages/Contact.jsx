import React from 'react';
import '../../App.css';

export default function Contact() {
  return (
    <div className='contact-container'>
      <h1 className='contact-heading'>Contact Us</h1>
      <p className='contact-description'>
        Thank you for visiting OurCognition! We're excited to share our project with you and
        welcome any feedback or questions you may have.
      </p>
      <h2 className='contact-inquiries-heading'>General Inquiries:</h2>
      <p className='contact-description'>
        For general questions about the project or to learn more about how OurCognition works,
        feel free to reach out to us. If you are a researcher or educator interested in collaborating, or if you have an inquiry
        about the scientific foundation of OurCognition, please contact us at the email address below.
      </p>
      <ul className='contact-list'>
        <li><strong>Email:</strong> ourcognition@gmail.com</li>
      </ul>
      <p className='contact-description'>
        We look forward to hearing from you!
      </p>
    </div>
  );
}
