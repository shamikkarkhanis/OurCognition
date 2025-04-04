import React, { useState, useEffect } from 'react';
import '../../styles/Timeline.css';
import alzheimersEvents from '../common/AlzheimersEvents.jsx';

/**
 * Timeline Component
 * Displays a sequence of Alzheimer's disease progression stages.
 * Each stage highlights associated brain regions and descriptive details.
 */
const Timeline = ({ selection, setActiveRegions }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Only supporting Alzheimer's for now
    const events = selection === "alzheimers" ? alzheimersEvents : [];

    // Updates the active brain regions for the current event
    const updateActiveRegions = (regions) => {
        if (!regions || regions.length === 0) {
            return;
        }
        setActiveRegions({});
        regions.forEach((region, index) => {
            setActiveRegions((prev) => ({ ...prev, [region]: index + 1 }));
        });
    };

    // Automatically update regions on slide change
    useEffect(() => {
        if (events.length > 0) {
            updateActiveRegions(events[currentIndex].brain_region);
        }
    }, [currentIndex]);

    // Navigate to the next stage
    const handleNext = () => {
        if (events.length === 0) {
            return;
        }
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    };

    // Navigate to the previous stage
    const handleBack = () => {
        if (events.length === 0) {
            return;
        }
        setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    };

    // Reset timeline to the beginning
    const handleReset = () => {
        setCurrentIndex(0);
        setActiveRegions({});
    };

    if (events.length === 0) {
        return <div className="timeline-container">No events available for this selection.</div>;
    }

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
                    <strong>Details:</strong>
                    <ul className="event-list">
                        {currentEvent.details.map((detail, index) => (
                            <li key={index} className="event-item">{detail}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="timeline-buttons">
                <button onClick={handleBack} className="back-button">
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
