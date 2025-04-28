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
import BrainMap from '../components/layout/BrainHeatmap';
import Timeline from '../components/layout/Timeline';
import '../styles/Content.css';
import BrainEnhance from '../components/layout/BrainEnhance';
import ContentTimeline from '../components/layout/ContentTimeline';

/**
 * Content component renders the main visualization area including brain heatmap and timeline
 * 
 * @returns {JSX.Element} Rendered component
 */
function Content() {

    // Track active brain region for highlighting
    const [activeRegion, setActiveRegion] = useState(null);

    // Store multiple active regions with their activation values
    const [activeRegions, setActiveRegions] = useState({});

    // Store region to show enhanced description
    const [enhancedRegion, setEnhancedRegion] = useState(null);

    // Store last visited index
    const [lastVisitedIndex, setLastVisitedIndex] = useState(0);

    // Handle region selection
    const handleRegionSelect = (region) => {
        setActiveRegion(region);
    };

    // Handle region click to enhance description
    const handleEnhanceRegion = (region) => {
        setEnhancedRegion(region);
    }

    return (
        <div className="content-root">
            <div className="content-body">
                <div className="sim-container">
                    <BrainMap
                        selectedRegions={activeRegions}
                        onRegionSelect={handleRegionSelect}
                        activeRegion={activeRegion}
                        enhanceRegion={handleEnhanceRegion}
                    />
                </div>
                <div className="description-container">

                    {enhancedRegion ? (
                        <BrainEnhance
                            enhancedRegion={enhancedRegion}
                            setEnhancedRegion={setEnhancedRegion}
                        />
                    ) : (
                        <Timeline
                            setActiveRegions={setActiveRegions}
                            activeRegion={activeRegion}
                            lastVisitedIndex={lastVisitedIndex}
                            setLastVisitedIndex={setLastVisitedIndex}
                        />
                    )}
                </div>
            </div>

            <div className="timeline-container">
                <ContentTimeline
                    lastVisitedIndex={lastVisitedIndex}
                    setLastVisitedIndex={setLastVisitedIndex} />
            </div>

        </div>
    );
}

export default Content;