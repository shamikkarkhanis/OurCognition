import { useState } from 'react'
import './App.css'
import BrainHeatmap from './components/BrainHeatmap.jsx';
import Content from './components/Content.jsx';
import Timeline from './components/Timeline.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  // State to switch between landing and content pages
  const [isLandingPage, setIsLandingPage] = useState(true);

  // Function to transition to the content page
  const goToContent = () => setIsLandingPage(false);

  return (
    <div>
      {isLandingPage ? (
        <div className="landing-page">
          <h1>Welcome to Our Cognition</h1>
          <p className="description">Explore the brain and its fascinating aspects</p>
          <button onClick={goToContent}>Enter</button>
        </div>
      ) : (
        <div>
          <Content />
        </div>
      )}
    </div>
  );
}

export default App;

