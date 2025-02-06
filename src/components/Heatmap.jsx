import React, { useRef, useEffect } from 'react';

const BrainActivitySimulator = ({
    gridSize = 200,
    width = 500,
    height = 500,
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        const startTime = performance.now();

        const draw = () => {
            const now = performance.now();
            const time = now - startTime;

            // Clear the canvas for each frame.
            ctx.clearRect(0, 0, width, height);
            const cellWidth = width / gridSize;
            const cellHeight = height / gridSize;

            // A moving focal point that creates a pulsating, localized activation.
            const focalX = gridSize / 2 + Math.sin(time * 0.001) * (gridSize / 4);
            const focalY = gridSize / 2 + Math.cos(time * 0.0015) * (gridSize / 4);

            // Loop over each cell in the grid.
            for (let row = 0; row < gridSize; row++) {
                for (let col = 0; col < gridSize; col++) {
                    // Base undulations: combine several sine/cosine waves based on position and time.
                    const wave1 = Math.sin((col / gridSize * 2 * Math.PI) + time * 0.002);
                    const wave2 = Math.cos((row / gridSize * 2 * Math.PI) + time * 0.0025);
                    const wave3 = Math.sin(((col + row) / gridSize * 2 * Math.PI) + time * 0.001);
                    let intensity = 0.33 * wave1 + 0.33 * wave2 + 0.34 * wave3;
                    intensity = (intensity + 1) / 2; // Normalize from [-1, 1] to [0, 1]

                    // Add a dynamic focal activation that is strongest near a moving point.
                    const focal = Math.exp(-(((row - focalX) ** 2 + (col - focalY) ** 2) / gridSize)) * 0.5;
                    intensity += focal;
                    intensity = Math.min(intensity, 1);

                    // Map the intensity to a color.
                    // Here we use HSL to interpolate from blue (inactive) to red (active).
                    const hue = 240 - intensity * 240; // 240 = blue, 0 = red
                    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;

                    // Draw the grid cell.
                    ctx.fillRect(col * cellWidth, row * cellHeight, cellWidth, cellHeight);
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();
        return () => cancelAnimationFrame(animationFrameId);
    }, [gridSize, width, height]);

    return <canvas ref={canvasRef} width={width} height={height} style={{ border: '1px solid #ccc' }} />;
};

export default BrainActivitySimulator;
