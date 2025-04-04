/**
 * Content Component
 * 
 * Main container component that displays brain visualization and timeline interface
 * for different neurological conditions.
 * 
 * @module Content
 */

import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContentNavbar from '../components/layout/ContentNavbar';
import BrainMap from '../components/layout/BrainHeatmap';
import Timeline from '../components/layout/Timeline';
import '../styles/Content.css';

/**
 * Content component renders the main visualization area including brain heatmap and timeline
 * 
 * @returns {JSX.Element} Rendered component
 */
function Content() {
    // Track currently selected condition (default: alzheimers)
    const [selection, setSelection] = useState('alzheimers');

    // Track active brain region for highlighting
    const [activeRegion, setActiveRegion] = useState(null);

    // Store multiple active regions with their activation values
    const [activeRegions, setActiveRegions] = useState({});

    // Reference to store interval ID for animation effects
    const undulationIntervalId = useRef(null);

    // Clean up any intervals when component unmounts
    useEffect(() => {
        return () => {
            if (undulationIntervalId.current) {
                clearInterval(undulationIntervalId.current);
            }
        };
    }, []);

    // Handle region selection
    const handleRegionSelect = (region) => {
        setActiveRegion(region);
    };

    return (
        <div className="content-root">
            <ContentNavbar
                setSelection={setSelection}
                currentSelection={selection}
            />
            <div className="content-body">
                <div className="sim-container">
                    <BrainMap
                        selectedRegions={activeRegions}
                        onRegionSelect={handleRegionSelect}
                        activeRegion={activeRegion}
                    />
                </div>
                <div className="timeline-container">
                    <Timeline
                        selection={selection}
                        setActiveRegions={setActiveRegions}
                        activeRegion={activeRegion}
                    />
                </div>
            </div>
        </div>
    );
}

// PropType validation for the component
Content.propTypes = {
    // Add any props if this component receives them later
};

export default Content;