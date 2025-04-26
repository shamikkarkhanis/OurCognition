import React, { useState, useEffect } from 'react';
import '../../styles/Timeline.css';
import alzheimersEvents from '../info/AlzheimersEvents.jsx';

/**
 * Timeline Component
 * Displays a sequence of Alzheimer's disease progression stages.
 * Each stage highlights associated brain regions and descriptive details.
 */
const Timeline = ({ selection, setActiveRegions, lastVisitedIndex, setLastVisitedIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(lastVisitedIndex);

    const events = alzheimersEvents;

    useEffect(() => {
        if (events.length > 0) {
            updateActiveRegions(events[currentIndex].brain_region);
        }
    }, [currentIndex]);

    const updateActiveRegions = (regions) => {
        setActiveRegions({});
        regions.forEach((region, index) => {
            setActiveRegions((prev) => ({ ...prev, [region]: index + 1 }));
        });
    };

    const handleNext = () => {
        if (events.length === 0) {
            return;
        }
        const nextIndex = (currentIndex + 1) % events.length;
        setCurrentIndex(nextIndex);
        setLastVisitedIndex(nextIndex);
    };

    const handleBack = () => {
        if (events.length === 0) {
            return;
        }
        if (currentIndex !== 0) {
            const prevIndex = (currentIndex - 1 + events.length) % events.length;
            setCurrentIndex(prevIndex);
            setLastVisitedIndex(prevIndex);
            return true;
        }
        return false;
    };

    const handleReset = () => {
        setCurrentIndex(0);
        setLastVisitedIndex(0);
        setActiveRegions({});
    };

    const currentEvent = events[currentIndex];

    return (
        <div className="timeline-container">
            <div className="timeline-header">
                <h2 className="timeline-title">{currentEvent.title}</h2>
                <div className="stage-progress">{currentIndex + 1}/{events.length}</div>
            </div>

            <div className="timeline-content">
                <p className="timeline-description">{currentEvent.description}</p>

                <div className="timeline-region">
                    <strong>Region: </strong>
                    {Array.isArray(currentEvent.brain_region)
                        ? currentEvent.brain_region.map(region =>
                            region.charAt(0).toUpperCase() + region.slice(1)
                        ).join(', ')
                        : currentEvent.brain_region.toUpperCase()}
                </div>

                <div className="timeline-details">
                    <strong>What Happens:</strong>
                    <ul className="event-list">
                        {currentEvent.what_happens.map((item, index) => (
                            <li key={index} className="event-item">{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="timeline-details">
                    <strong>Why It Matters:</strong>
                    <ul className="event-list">
                        {currentEvent.why_it_matters.map((item, index) => (
                            <li key={index} className="event-item">{item}</li>
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

            {/* Source bubbles */}


            <div className="timeline-buttons">

                <button onClick={handleBack} className="back-button" style={{ backgroundColor: (currentIndex > 0 && events.length > 0) ? '#4a56e2' : '#888' }}>
                    ← Back
                </button>
                <button onClick={handleReset} className="reset-button">
                    Reset
                </button>
                <button onClick={handleNext} className="next-button">
                    Next →
                </button>

            </div>
        </div>
    );
};

export default Timeline;
