import React, { useRef, useEffect } from 'react';

// Helper: Convert HSL (h in degrees, s and l in [0,1]) to an RGB object.
function hslToRgb(h, s, l) {
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const hPrime = h / 60;
    const x = c * (1 - Math.abs((hPrime % 2) - 1));
    let r1, g1, b1;
    if (hPrime >= 0 && hPrime < 1) [r1, g1, b1] = [c, x, 0];
    else if (hPrime >= 1 && hPrime < 2) [r1, g1, b1] = [x, c, 0];
    else if (hPrime >= 2 && hPrime < 3) [r1, g1, b1] = [0, c, x];
    else if (hPrime >= 3 && hPrime < 4) [r1, g1, b1] = [0, x, c];
    else if (hPrime >= 4 && hPrime < 5) [r1, g1, b1] = [x, 0, c];
    else[r1, g1, b1] = [c, 0, x];
    const m = l - c / 2;
    return {
        r: Math.round((r1 + m) * 255),
        g: Math.round((g1 + m) * 255),
        b: Math.round((b1 + m) * 255)
    };
}

// Helper: Blend two colors given as {r, g, b} using factor (0 = all color1, 1 = all color2)
function blendColors(color1, color2, factor) {
    return {
        r: Math.round(color1.r * (1 - factor) + color2.r * factor),
        g: Math.round(color1.g * (1 - factor) + color2.g * factor),
        b: Math.round(color1.b * (1 - factor) + color2.b * factor)
    };
}

const BrainActivitySimulator = ({
    gridSize = 200,
    width = 500,
    height = 500,
}) => {
    const canvasRef = useRef(null);
    const hoverPosRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        const startTime = performance.now();

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            hoverPosRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const handleMouseLeave = () => {
            hoverPosRef.current = null;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        const draw = () => {
            const now = performance.now();
            const time = now - startTime;
            ctx.clearRect(0, 0, width, height);

            const cellWidth = width / gridSize;
            const cellHeight = height / gridSize;

            const focalX = gridSize / 2 + Math.sin(time * 0.001) * (gridSize / 4);
            const focalY = gridSize / 2 + Math.cos(time * 0.0015) * (gridSize / 4);

            for (let row = 0; row < gridSize; row++) {
                for (let col = 0; col < gridSize; col++) {
                    const wave1 = Math.sin((col / gridSize * 2 * Math.PI) + time * 0.002);
                    const wave2 = Math.cos((row / gridSize * 2 * Math.PI) + time * 0.0025);
                    const wave3 = Math.sin(((col + row) / gridSize * 2 * Math.PI) + time * 0.001);
                    let intensity = 0.33 * wave1 + 0.33 * wave2 + 0.34 * wave3;
                    intensity = (intensity + 1) / 2; // Normalize to [0, 1]

                    const focal = Math.exp(-(((row - focalX) ** 2 + (col - focalY) ** 2) / gridSize)) * 0.5;
                    intensity = Math.min(intensity + focal, 1);

                    const backgroundHue = 240 - intensity * 240;
                    const backgroundRGB = hslToRgb(backgroundHue, 1, 0.5);

                    const cellCenterX = col * cellWidth + cellWidth / 2;
                    const cellCenterY = row * cellHeight + cellHeight / 2;

                    let blendFactor = 0;
                    if (hoverPosRef.current) {
                        const dx = cellCenterX - hoverPosRef.current.x;
                        const dy = cellCenterY - hoverPosRef.current.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        // Calculate the blob's dynamic radius using time-based oscillation
                        const baseRadius = 60;
                        const blobOscillation = 25 * Math.sin(time * 0.001);
                        const dynamicRadius = baseRadius + blobOscillation;

                        // Create random edge variations
                        const angle = Math.atan2(dy, dx);
                        const noiseScale = 8; // Controls how many "bumps" around the circle
                        const noiseAmplitude = 20; // Controls how big the random variations are

                        // Use multiple sine waves with different frequencies for more organic look
                        const noise =
                            0.2 * (Math.sin(angle * noiseScale + time * 0.01) * 0.4 +
                                Math.sin(angle * (noiseScale * 1.7) + time * 0.015) * 0.3 +
                                Math.sin(angle * (noiseScale * 2.3) + time * 0.008) * 0.3);

                        const effectiveRadius = dynamicRadius + (noise * noiseAmplitude);

                        if (distance < effectiveRadius) {
                            blendFactor = 1;
                        } else if (distance < effectiveRadius + 20) {
                            blendFactor = 1 - (distance - effectiveRadius) / 20;
                        }
                    }

                    const redColor = { r: 255, g: 0, b: 0 };
                    const finalColor = blendColors(backgroundRGB, redColor, blendFactor);
                    ctx.fillStyle = `rgb(${finalColor.r}, ${finalColor.g}, ${finalColor.b})`;
                    ctx.fillRect(col * cellWidth, row * cellHeight, cellWidth, cellHeight);
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [gridSize, width, height]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            style={{ border: '1px solid #ccc', display: 'block' }}
        />
    );
};

export default BrainActivitySimulator;
