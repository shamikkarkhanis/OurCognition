import React, { useEffect, useRef } from 'react';
import '../../styles/ContentTimeline.css';
import mciStageEvents from '../info/stages/MCIStageEvents';
import milddementiaStageEvents from '../info/stages/MilddementiaStageEvents';
import moderatedementiaStageEvents from '../info/stages/ModeratedementiaStageEvents';
import preclinicalStageEvents from '../info/stages/PreclinicalStageEvents';
import severedementiaStageEvents from '../info/stages/SeveredementiaStageEvents';

const ContentTimeline = React.memo(({ }) => {
    const trackRef = useRef(null);

    const stages = [
        preclinicalStageEvents,
        mciStageEvents,
        milddementiaStageEvents,
        moderatedementiaStageEvents,
        severedementiaStageEvents
    ];

    // Create and manage tooltips for brain regions
    const handleMouseEnter = (e, stageName) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'brain-tooltip';

        tooltip.innerHTML = `
      <div class="tooltip-title">${stageName}</div>
    `;

        tooltip.style.position = 'absolute';
        tooltip.style.left = `${e.clientX + 12}px`;
        tooltip.style.top = `${e.clientY + 12}px`;
        tooltip.style.zIndex = '9999';
        tooltip.style.pointerEvents = 'none';

        document.body.appendChild(tooltip);

        // Store reference so we can remove it later
        e.target._tooltip = tooltip;
    };

    const handleMouseLeaveToolTip = (e) => {
        if (e.target._tooltip) {
            e.target._tooltip.remove();
            e.target._tooltip = null;
        }
    };


    return (
        <div className="timeline-wrapper">
            <div
                ref={trackRef}
                className="timeline-track"
            >
                {stages.map((stageEvents, stageIdx) => (
                    <div key={stageIdx} className="timeline-stage">
                        {/* Major tick for the stage */}
                        <div
                            className="timeline-tick major"
                            onMouseEnter={(e) => handleMouseEnter(e, stageEvents[0]?.title || "Stage")} // Pass event and name
                            onMouseLeave={handleMouseLeaveToolTip}
                        />

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
            </div>
        </div>
    );

});

export default ContentTimeline;
