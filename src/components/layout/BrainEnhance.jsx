import React from 'react';
import '../../styles/Timeline.css';

import AlzheimersRegionsData from '../info/AlzheimersRegionsData.jsx';

//* this is a panel appearing over timeline describing onclicked region

const BrainEnhance = React.memo(({ enhancedRegion, setEnhancedRegion }) => {

    const data = AlzheimersRegionsData[enhancedRegion.id];

    if ((!enhancedRegion) || (!data)) {
        return
    }

    const handleBack = () => {
        setEnhancedRegion(null);
    };

    return (
        <div className="timeline-container">
            <div className="timeline-header">
                <h2 className="timeline-title">{data.name}</h2>
            </div>

            <div className="timeline-content">
                <div className="timeline-details">
                    <strong>Functions:</strong>
                    <ul className="event-list">
                        {data.functions.map((fn, i) => (
                            <li key={i} className="event-item">{fn}</li>
                        ))}
                    </ul>
                </div>

                <div className="timeline-details">
                    <strong>Alzheimer's Impact</strong>
                    <p className="timeline-description">
                        <strong>Structural Changes: </strong>
                        {data.alzheimersImpact.structuralChanges}
                    </p>

                    <strong>Biochemical Changes:</strong>
                    <ul className="event-list">
                        {data.alzheimersImpact.biochemicalChanges.map((change, i) => (
                            <li key={i} className="event-item">{change}</li>
                        ))}
                    </ul>

                    <strong>Clinical Symptoms:</strong>
                    <ul className="event-list">
                        {data.alzheimersImpact.clinicalSymptoms.map((symptom, i) => (
                            <li key={i} className="event-item">{symptom}</li>
                        ))}
                    </ul>
                </div>

                <div className="source-container">
                    <p className="source-title">Sources</p>
                    <div className="source-bubbles">
                        {currentEvent.sources?.map((src, index) => (
                            <a
                                key={index}
                                href={src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="source-dot"
                                title={`Source ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

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