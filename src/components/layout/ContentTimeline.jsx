// ContentTimeline.jsx
import React, { useRef } from 'react'
import preclinical from '../info/stages/PreclinicalStageEvents'
import mci from '../info/stages/MCIStageEvents'
import mild from '../info/stages/MilddementiaStageEvents'
import mod from '../info/stages/ModeratedementiaStageEvents'
import severe from '../info/stages/SeveredementiaStageEvents'
import '../../styles/ContentTimeline.css'

export default function ContentTimeline({ lastVisitedIndex }) {
    const trackRef = useRef(null)

    const stages = [preclinical, mci, mild, mod, severe]

    // compute the starting global index of each stage
    const stageStart = [];
    let acc = 1;
    for (const evts of stages) {
        stageStart.push(acc);
        acc += evts.length;
    }

    return (
        <div className="timeline-wrapper">
            <div ref={trackRef} className="timeline-track">
                {stages.map((evtSlice, sidx) => {
                    const start = stageStart[sidx]
                    const end = start + evtSlice.length - 1
                    const current = lastVisitedIndex >= start && lastVisitedIndex <= end

                    return (
                        <div
                            key={sidx}
                            className={`timeline-stage${current ? ' current-stage' : ''}`}
                        >
                            {/* stage tick */}
                            <div className="timeline-tick major" />

                            {/* minor ticks */}
                            {evtSlice.map((_, eidx) => {
                                const glob = start + eidx
                                const isNow = glob === lastVisitedIndex
                                return (
                                    <div
                                        key={eidx}
                                        className={`timeline-tick minor${isNow ? ' minor-current' : ''}`}
                                        style={{
                                            left: `${((eidx + 1) * 100) / (evtSlice.length + 1)}%`
                                        }}
                                    />
                                )
                            })}

                            {/* only render label under the *current* stage */}
                            {current && (
                                <div className="stage-name-label">
                                    {evtSlice[0].title}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
