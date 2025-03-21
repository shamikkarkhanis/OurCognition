import React from 'react';
import '../../styles/App.css';
import { Button } from '../common/Button';
import '../../styles/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className="hero-logo"></div>
      <p>Exploring the complexities of Alzheimer's disease and cognitive health</p>
      <div className='hero-btns'>
      <Button
  className='btns'
  buttonStyle='btn--outline'
  buttonSize='btn--large'
  to='/content' // Instead of onClick
>
  LEARN MORE
</Button>

      </div>
    </div>
  );
}

export default HeroSection;
