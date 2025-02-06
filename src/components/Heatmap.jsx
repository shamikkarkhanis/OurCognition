import React, { useState, useEffect, useRef } from 'react';

// Default route representing a disease activation pattern.
// Each point is defined in grid coordinates (0 to gridSize) and has an optional duration (ms).
const defaultRoute = {
    name: "Default Disease Activation Route",
    points: [
        { row: 12.5, col: 12.5, duration: 5000 }, // Region 1: top-left
        { row: 12.5, col: 37.5, duration: 5000 }, // Region 2: top-right
        { row: 37.5, col: 37.5, duration: 5000 }, // Region 3: bottom-right
        { row: 37.5, col: 12.5, duration: 5000 }  // Region 4: bottom-left
    ]
};

// A helper function to compute a modern color based on intensity.
// It interpolates between a dark base and a vibrant activation color.
const getColor = (intensity) => {
    const base = { r: 34, g: 34, b: 34 };         // Dark gray base
    const active = { r: 255, g: 69, b: 0 };         // Vibrant red/orange activation
    const r = Math.floor(base.r + (active.r - base.r) * intensity);
    const g = Math.floor(base.g + (active.g - base.g) * intensity);
    const b = Math.floor(base.b + (active.b - base.b) * intensity);
    return `rgb(${r}, ${g}, ${b})`;
};

/**
 * BrainHeatMap Component
 * 
 * Props:
 *  - route: A route object containing a name and an array of points.
 *           Each point should be of the form { row, col, duration? }.
 *           Defaults to a sample route if not provided.
 *  - gridSize: Number of cells per row/column (default: 50).
 *  - spread: Controls the falloff of the heat intensity (default: 10).
 *  - backgroundImage: Optional URL of a brain silhouette for realism.
 */
const BrainHeatMap = ({
    route = defaultRoute,
    gridSize = 50,
    spread = 10,
    backgroundImage
}) => {
    // The moving center that represents the currently active region.
    const [currentCenter, setCurrentCenter] = useState(route.points[0]);

    // Refs to track the current segment index and the segment's start time.
    const currentSegmentIndexRef = useRef(0);
    const segmentStartTimeRef = useRef(performance.now());

    useEffect(() => {
        let animationFrameId;

        const animate = () => {
            const now = performance.now();
            const points = route.points;
            const currentIndex = currentSegmentIndexRef.current;
            const currentPoint = points[currentIndex];
            const nextIndex = (currentIndex + 1) % points.length;
            const nextPoint = points[nextIndex];
            // Use the duration defined for the current point, or default to 5000ms.
            const duration = currentPoint.duration || 5000;
            const elapsed = now - segmentStartTimeRef.current;
            let progress = Math.min(elapsed / duration, 1);

            // Linearly interpolate between the current and next route points.
            const newCenter = {
                row: currentPoint.row + (nextPoint.row - currentPoint.row) * progress,
                col: currentPoint.col + (nextPoint.col - currentPoint.col) * progress,
            };
            setCurrentCenter(newCenter);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                // Move to the next segment when the current one is complete.
                currentSegmentIndexRef.current = nextIndex;
                segmentStartTimeRef.current = now;
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [route]);

    // Compute the activation intensity of a cell based on its distance from currentCenter.
    const computeIntensity = (row, col) => {
        const distance = Math.sqrt(
            Math.pow(row - currentCenter.row, 2) + Math.pow(col - currentCenter.col, 2)
        );
        // Intensity falls off linearly; adjust the spread parameter to control radius.
        return Math.max(0, 1 - distance / spread);
    };

    return (
        <div className="flex flex-col items-center p-8">
            <div className="relative" style={{ width: 'min(500px, 90vw)', height: 'min(500px, 90vw)' }}>
                {/* Optionally include a brain silhouette in the background for realism */}
                {backgroundImage && (
                    <img
                        src={backgroundImage}
                        alt="Brain Silhouette"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.3,
                        }}
                    />
                )}
                <div
                    className="grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                        gap: '2px',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    {Array.from({ length: gridSize }).map((_, rowIndex) =>
                        Array.from({ length: gridSize }).map((_, colIndex) => {
                            const intensity = computeIntensity(rowIndex, colIndex);
                            return (
                                <div
                                    key={`${rowIndex}-${colIndex}`}
                                    className="aspect-square"
                                    style={{
                                        backgroundColor: getColor(intensity),
                                        transition: 'background-color 0.1s linear',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default BrainHeatMap;
