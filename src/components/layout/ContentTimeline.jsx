import React, { useRef } from 'react';
import '../../styles/ContentTimeline.css';
import mciStageEvents from '../info/stages/MCIStageEvents';
import milddementiaStageEvents from '../info/stages/MilddementiaStageEvents';
import moderatedementiaStageEvents from '../info/stages/ModeratedementiaStageEvents';
import preclinicalStageEvents from '../info/stages/PreclinicalStageEvents';
import severedementiaStageEvents from '../info/stages/SeveredementiaStageEvents';

const ContentTimeline = React.memo(({ lastVisitedIndex }) => {
    const trackRef = useRef(null);

    const stages = [
        preclinicalStageEvents,
        mciStageEvents,
        milddementiaStageEvents,
        moderatedementiaStageEvents,
        severedementiaStageEvents
    ];

    // compute starting global index of each stage
    const stageStartIndices = [];
    let acc = 0;
    for (const evts of stages) {
        stageStartIndices.push(acc);
        acc += evts.length;
    }

    const handleMouseEnter = (e, stageName) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'brain-tooltip';
        tooltip.innerHTML = `<div class="tooltip-title">${stageName}</div>`;
        tooltip.style.position = 'absolute';
        tooltip.style.left = `${e.clientX + 12}px`;
        tooltip.style.top = `${e.clientY + 12}px`;
        tooltip.style.zIndex = '9999';
        tooltip.style.pointerEvents = 'none';
        document.body.appendChild(tooltip);
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
            <div ref={trackRef} className="timeline-track">
                {stages.map((stageEvents, stageIdx) => {
                    const stageStart = stageStartIndices[stageIdx];
                    return (
                        <div key={stageIdx} className="timeline-stage">
                            <div
                                className="timeline-tick major"
                                onMouseEnter={(e) =>
                                    handleMouseEnter(e, stageEvents[0]?.title || 'Stage')
                                }
                                onMouseLeave={handleMouseLeaveToolTip}
                            />
                            {stageEvents.map((_, eventIdx) => {
                                const globalEventIdx = stageStart + eventIdx;
                                const isCurrent = globalEventIdx === lastVisitedIndex;
                                return (
                                    <div
                                        key={eventIdx}
                                        className={`timeline-tick minor${isCurrent ? ' minor-current' : ''}`}
                                        style={{
                                            left: `${((eventIdx + 1) * 100) / (stageEvents.length + 1)}%`
                                        }}
                                        onMouseEnter={(e) =>
                                            handleMouseEnter(e, stageEvents[eventIdx]?.title || 'Event')
                                        }
                                        onMouseLeave={handleMouseLeaveToolTip}
                                    >
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default ContentTimeline;
