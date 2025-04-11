import React from 'react';
import '../../styles/Timeline.css';

import AlzheimersRegionsData from '../common/AlzheimersRegionsData.jsx';

//* this is a panel appearing over timeline describing onclicked region

const BrainEnhance = React.memo(({ enhancedRegion, setEnhancedRegion }) => {

    if (!enhancedRegion) {
        return
    }

    const data = AlzheimersRegionsData[enhancedRegion.id];

    if (!data) {
        return <div className="timeline-content">No data available for this region.</div>;
    }

    const handleBack = () => {
        setEnhancedRegion(null);
    };


    return (
        <div className='timeline-content'>
            <div>
                <h2>{data.name}</h2>
                <h4>Functions:</h4>
                <ul>{data.functions.map((fn, i) => <li key={i}>{fn}</li>)}</ul>

                <h4>Alzheimer's Impact</h4>
                <p><strong>Structural Changes:</strong> {data.alzheimersImpact.structuralChanges}</p>
                <p><strong>Biochemical Changes:</strong></p>
                <ul>{data.alzheimersImpact.biochemicalChanges.map((c, i) => <li key={i}>{c}</li>)}</ul>
                <p><strong>Clinical Symptoms:</strong></p>
                <ul>{data.alzheimersImpact.clinicalSymptoms.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>

            <div className="timeline-buttons">
                <button onClick={handleBack} className="back-button">
                    ← Back
                </button>
            </div>
        </div>
    );
})

export default BrainEnhance;