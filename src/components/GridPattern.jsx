import React, { useState, useEffect } from 'react';
import { hslToRgb } from './utils/colorUtils';
import { computeWaveIntensity, computeFocalEffect } from './utils/gridUtils';

const GridPattern = ({ gridSize = 50, width = 500, height = 500, patternId }) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let animationFrameId;
        const startTime = performance.now();

        const animate = () => {
            const now = performance.now();
            setTime(now - startTime);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // Calculate dimensions for each cell.
    const cellWidth = width / gridSize;
    const cellHeight = height / gridSize;

    // Compute a focal point for a fluid, organic effect.
    const focalX = gridSize / 2 + Math.sin(time * 0.001) * (gridSize / 4);
    const focalY = gridSize / 2 + Math.cos(time * 0.0015) * (gridSize / 4);

    // Build an array of grid cells.
    const cells = [];
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            // Calculate a base intensity using wave and focal effects.
            let intensity = computeWaveIntensity(row, col, gridSize, time);
            intensity += computeFocalEffect(row, col, focalX, focalY, gridSize);
            intensity = Math.min(intensity, 1);

            // Map intensity to a hue value (blue-to-red gradient in this case).
            const hue = 240 - intensity * 240;
            const rgb = hslToRgb(hue, 1, 0.5);
            const fillColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

            cells.push(
                <rect
                    key={`${row}-${col}`}
                    x={col * cellWidth}
                    y={row * cellHeight}
                    width={cellWidth}
                    height={cellHeight}
                    fill={fillColor}
                />
            );
        }
    }

    return (
        <pattern id={patternId} patternUnits="userSpaceOnUse" width={width} height={height}>
            {/* Optional background */}
            <rect width={width} height={height} fill="white" />
            {cells}
        </pattern>
    );
};

export default GridPattern;
