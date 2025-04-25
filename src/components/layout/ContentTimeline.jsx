import React, { useEffect, useRef } from 'react';
import '../../styles/ContentTimeline.css';
import mciStageEvents from '../info/stages/MCIStageEvents';
import milddementiaStageEvents from '../info/stages/MilddementiaStageEvents';
import moderatedementiaStageEvents from '../info/stages/ModeratedementiaStageEvents';
import preclinicalStageEvents from '../info/stages/PreclinicalStageEvents';
import severedementiaStageEvents from '../info/stages/SeveredementiaStageEvents';

export default function CursorControlledTimeline() {
    const trackRef = useRef(null);
    const indicatorRef = useRef(null);

    const stages = [
        preclinicalStageEvents,
        mciStageEvents,
        milddementiaStageEvents,
        moderatedementiaStageEvents,
        severedementiaStageEvents
    ];


    const handleMouseMove = (e) => {
        const track = trackRef.current;
        if (!track || !indicatorRef.current) return;

        const rect = track.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const clamped = Math.max(0, Math.min(rect.width, x));
        indicatorRef.current.style.transform = `translateX(${clamped}px) translateY(-50%)`;
    };

    const handleMouseLeave = () => {
        const track = trackRef.current;
        if (!track || !indicatorRef.current) return;

    };

    return (
        <div className="timeline-wrapper">
            <div
                ref={trackRef}
                className="timeline-track"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {stages.map((stageEvents, stageIdx) => (
                    <div key={stageIdx} className="timeline-stage">
                        {/* Major tick for the stage */}
                        <div className="timeline-tick major" />

                        {/* Minor ticks for each event */}
                        {stageEvents.map((_, eventIdx) => (
                            <div
                                key={eventIdx}
                                className="timeline-tick minor"
                                style={{
                                    left: `${(eventIdx + 1) * (100 / (stageEvents.length + 1))}%`
                                }}
                            />
                        ))}
                    </div>
                ))}
                <div ref={indicatorRef} className="timeline-indicator" />
            </div>
        </div>
    );
}
