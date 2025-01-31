import { useState } from 'react';
import './App.css';
import Content from './components/Content.jsx';
import Navbar from './components/Navbar.jsx';
import Heatmap from './components/Heatmap';


function App() {
    // State to switch between landing and content pages
    const [isLandingPage, setIsLandingPage] = useState(true);

    // Function to switch to the content page
    const goToContent = () => setIsLandingPage(false);

    // Function to go back to the landing page
    const goBackToLanding = () => setIsLandingPage(true);

    // return (
    //     <div>
    //         {/* Common Header */}
    //         <header className="header">
    //             <div className="logo-container" onClick={goBackToLanding}>
    //                 <img src="/assets/logo_type.png" alt="OurCognition Logo" className="logo" />
    //             </div>

    //             <div className="details-container">
    //                 <p>Our web app provides a visual and interactive journey through the progression of neurodegenerative diseases, highlighting the regions of the brain affected at each stage. By showcasing the parts of the brain active during different aspects of these disorders, the app deepens our understanding of how and where these diseases take hold. Each slide presents key insights in a clear, bullet-point format, building upon core concepts from our neuroscience studies to make complex information accessible and engaging.</p>
    //             </div>

    //             {/* Button to go to Content (only on Landing Page) */}
    //             {/* {isLandingPage && (
    //                 <button className="enter-button" onClick={goToContent}>
    //                     Learn More
    //                 </button>
    //             )} */}

    //             <Content />
    //         </header>

    //         {/* Conditional rendering for Landing or Content pages
    //         {isLandingPage ? (
    //             <div className="landing-page">
    //             </div>

    //         ) : (

    //             <div className="content-page">

    //             </div>
    //         )} */}
    //     </div>
    // );

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Heatmap />
        </div>
    );
}

export default App;
