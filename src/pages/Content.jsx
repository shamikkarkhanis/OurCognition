import { useState, useRef } from 'react';
import ContentNavbar from '../components/layout/ContentNavbar.jsx';
import BrainHeatmap from '../components/common/BrainHeatmap.jsx';
import Timeline from '../components/layout/Timeline.jsx';
import MicroTimeline from '../components/common/MicroTimeline.jsx';
import { Button } from "../components/common/Button.jsx"; 

function Content() {
    const [selection, setSelection] = useState('alzheimers');
    const [showMicro, setShowMicro] = useState(false); // Toggle between Macro and Micro Timeline
    const [activeRegion, setActiveRegion] = useState(null);
    const [activeRegions, setActiveRegions] = useState({});
    const undulationIntervalId = useRef(null);

    // Function to start undulating color shades
    const undulateRegion = (regionId) => {
        if (activeRegion) {
            setActiveRegions((prev) => ({ ...prev, [activeRegion]: 0 }));
            if (undulationIntervalId.current) {
                clearInterval(undulationIntervalId.current);
            }
        }

        setActiveRegion(regionId);

        const intervalTime = 100; // Time between each shade change (ms)
        const newIntervalId = setInterval(() => {
            setActiveRegions((prev) => {
                const currentActivity = (prev[regionId] || 0) + 7;
                return { ...prev, [regionId]: currentActivity % 100 };
            });
        }, intervalTime);

        undulationIntervalId.current = newIntervalId;
    };

    return (
        <div style={styles.container}>
            <ContentNavbar setSelection={setSelection} />
            <div style={styles.content}>
                <div style={styles.heatmapContainer}>
                    <BrainHeatmap
                        selection={selection}
                        undulateRegion={undulateRegion}
                        activeRegions={activeRegions} />
                </div>
                <div style={styles.timelineContainer}>
                    {/* Toggle Button */}
                    <Button onClick={() => setShowMicro(!showMicro)} style={styles.toggleButton}>
                        {showMicro ? 'Show Macro Timeline' : 'Show Micro Timeline'}
                    </Button>
                    
                    {/* Conditional Rendering of Timelines */}
                    {showMicro ? (
                        <MicroTimeline triggerUndulation={undulateRegion} />
                    ) : (
                        <Timeline selection={selection} triggerUndulation={undulateRegion} />
                    )}
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
        position: 'relative',
    },
    toggleButton: {
        marginBottom: '10px',
        width: '100%',
    },
};

export default Content;
