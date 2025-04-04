import { useState, useRef } from 'react';
import ContentNavbar from '../components/layout/ContentNavbar.jsx';
import BrainMap from '../components/layout/BrainHeatmap.jsx';
import Timeline from '../components/layout/Timeline.jsx';
import '../styles/Content.css';

function Content() {
    const [selection, setSelection] = useState('alzheimers');
    const [activeRegion, setActiveRegion] = useState(null);
    const [activeRegions, setActiveRegions] = useState({});
    const undulationIntervalId = useRef(null);

    return (
        <div className="content-root">
            <ContentNavbar setSelection={setSelection} />
            <div className="content-body">
                <div className="sim-container">
                    <BrainMap selectedRegions={activeRegions} />
                </div>
                <div className="timeline-container">
                    <Timeline
                        selection={selection}
                        setActiveRegions={setActiveRegions}
                    />
                </div>
            </div>
        </div>
    );
}

export default Content;
