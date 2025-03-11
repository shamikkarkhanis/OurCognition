// Content.jsx

import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import BrainHeatmap from './BrainHeatmap.jsx';
import Timeline from './Timeline.jsx';

// Memoize heavy child components to prevent unnecessary re-renders.
const MemoizedBrainHeatmap = React.memo(BrainHeatmap);
const MemoizedTimeline = React.memo(Timeline);

function Content() {
    const [selection, setSelection] = useState('alzheimers');
    const { selectedRegions, setSelectedRegions } = useState([]);

    return (
        <div style={styles.container}>
            <Navbar setSelection={setSelection} />
            <div style={styles.content}>
                <div style={styles.heatmapContainer}>
                    <MemoizedBrainHeatmap selectedRegions={selectedRegions} />
                </div>
                <div style={styles.timelineContainer}>
                    <MemoizedTimeline selection={selection} />
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
