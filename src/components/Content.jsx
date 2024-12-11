// Content.jsx

import { useState, useRef } from 'react';
import Navbar from './Navbar.jsx';
import BrainHeatmap from './BrainHeatmap.jsx';
import Timeline from './Timeline.jsx';
import { act } from 'react';
import { active } from 'd3';

function Content() {
    const [selection, setSelection] = useState('alzheimers');

    const [activeRegion, setActiveRegion] = useState(null);
    const [activeRegions, setActiveRegions] = useState({});
    const undulationIntervalId = useRef(null);

    // Function to start undulating color shades
    const undulateRegion = (regionId) => {
        // Stop undulation for the currently active region, if any
        if (activeRegion) {
            setActiveRegions((prev) => ({ ...prev, [activeRegion]: 0 })); // Reset the previous region's activity
            if (undulationIntervalId.current) {
                clearInterval(undulationIntervalId.current); // Clear the interval for the previous region
            }
        }

        // Set the new active region
        setActiveRegion(regionId);

        // Start undulation for the new region
        const intervalTime = 100; // Time between each shade change (ms)
        const newIntervalId = setInterval(() => {
            setActiveRegions((prev) => {
                const currentActivity = (prev[regionId] || 0) + 7;
                return { ...prev, [regionId]: currentActivity % 100 };
            });
        }, intervalTime);

        // Store the new interval ID in the ref
        undulationIntervalId.current = newIntervalId;
    };

    return (
        <div style={styles.container}>
            <Navbar setSelection={setSelection} />
            <div style={styles.content}>
                <div style={styles.heatmapContainer}>
                    <BrainHeatmap
                        selection={selection}
                        undulateRegion={undulateRegion}
                        activeRegions={activeRegions} />
                </div>
                <div style={styles.timelineContainer}>
                    <Timeline
                        selection={selection}
                        triggerUndulation={undulateRegion} />

                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        minHeight: '100vh',
        backgroundColor: '#0f0f0f',
        color: 'white',
    },
    content: {
        display: 'flex',
        gap: '20px',
        marginTop: '20px',
    },
    heatmapContainer: {
        flex: '1',
        backgroundColor: '#1c1c1e',
        borderRadius: '10px',
        padding: '20px',
    },
    timelineContainer: {
        flex: '1',
        backgroundColor: '#1c1c1e',
        borderRadius: '10px',
        padding: '20px',
    },
};

export default Content;
