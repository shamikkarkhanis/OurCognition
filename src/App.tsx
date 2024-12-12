import { useState } from 'react';
import './App.css';
import Content from './components/Content.jsx';
import Navbar from './components/Navbar.jsx';


function App() {
  // State to switch between landing and content pages
  const [isLandingPage, setIsLandingPage] = useState(true);

  // Function to switch to the content page
  const goToContent = () => setIsLandingPage(false);

  // Function to go back to the landing page
  const goBackToLanding = () => setIsLandingPage(true);

  return (
    <div>
      {/* Common Header */}
      <header className="header">
        <div className="logo-container" onClick={goBackToLanding}>
          <img src="/assets/logo_type.png" alt="OurCognition Logo" className="logo" />
        </div>

        {/* Button to go to Content (only on Landing Page) */}
        {isLandingPage && (
          <button className="enter-button" onClick={goToContent}>
            Learn More
          </button>
        )}
      </header>

      {/* Conditional rendering for Landing or Content pages */}
      {isLandingPage ? (
        <div className="landing-page">      
</div>

      ) : (

        <div className="content-page">
           <Content />
        </div>
      )}
    </div>
  );
}

export default App;
