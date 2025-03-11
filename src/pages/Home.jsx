import React from 'react';
import '../styles/App.css'
import Cards from '../components/layout/Cards';
import HeroSection from '../components/layout/HeroSection';
import About from './About';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;