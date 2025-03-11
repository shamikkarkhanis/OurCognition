import { useState } from 'react';
import './App.css';
import Content from './components/Content.jsx';
import Navbar from './components/Navbar.jsx';
import Brainmap from './components/BrainHeatmap.jsx';


function App() {
    // State to switch between landing and content pages
    const [isLandingPage, setIsLandingPage] = useState(true);

    // Function to switch to the content page
    const goToContent = () => setIsLandingPage(false);

    // Function to go back to the landing page
    const goBackToLanding = () => setIsLandingPage(true);

    return (
        <div>
            <Content />
        </div>
    );
}

export default App;