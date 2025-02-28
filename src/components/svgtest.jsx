// svgtest.jsx
import React, { useState, useEffect } from 'react';
import { hslToRgb } from './utils/colorUtils';

const ChangingColorSVG = () => {
    const [animationTime, setAnimationTime] = useState(0);
    const [isWarm, setIsWarm] = useState(false);
    const period = 5000; // 5-second cycle

    useEffect(() => {
        let animationFrameId;
        const updateAnimationTime = (timestamp) => {
            setAnimationTime(timestamp);
            animationFrameId = requestAnimationFrame(updateAnimationTime);
        };
        animationFrameId = requestAnimationFrame(updateAnimationTime);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // Calculate the phase in radians based on the elapsed time.
    // This phase goes from 0 to 2π over one cycle (5 seconds).
    const phase = (animationTime % period) * (2 * Math.PI / period);

    // Use a sine wave that starts at its minimum value.
    // For cool colors: undulate between 180 and 300.
    // For warm colors: undulate between 0 and 60.
    // We set the sine phase offset to -π/2 so that at phase 0, sin(-π/2) is -1.
    const effectiveHue = isWarm
        ? (30 + 30 * Math.sin(phase - Math.PI / 2))   // 30 ± 30 → 0 to 60
        : (240 + 60 * Math.sin(phase - Math.PI / 2));   // 240 ± 60 → 180 to 300

    const rgbColor = hslToRgb(effectiveHue, 1, 0.5);
    const fillColor = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;

    return (
        <svg
            width="200"
            height="200"
            onClick={() => setIsWarm(prev => !prev)}
            style={{ cursor: 'pointer' }}
        >
            <circle cx="100" cy="100" r="80" fill={fillColor} />
        </svg>
    );
};

export default ChangingColorSVG;
