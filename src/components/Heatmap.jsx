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
        b: Math.round((b1 + m) * 255),
    };
}

// Helper: Blend two colors given as {r, g, b} using factor (0 = all color1, 1 = all color2)
function blendColors(color1, color2, factor) {
    return {
        r: Math.round(color1.r * (1 - factor) + color2.r * factor),
        g: Math.round(color1.g * (1 - factor) + color2.g * factor),
        b: Math.round(color1.b * (1 - factor) + color2.b * factor),
    };
}

const BrainActivitySimulator = ({
    gridSize = 200,
    width = 500,
    height = 500,
}) => {
    const canvasRef = useRef(null);
    // activeFifthRef will store an index from 0 to 4 for the active 72° sector.
    const activeFifthRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        const startTime = performance.now();
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2;

        // On click, determine which 72° sector (fifth) was clicked.
        const handleClick = (e) => {
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            const dx = clickX - centerX;
            const dy = clickY - centerY;
            const angle = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;
            const regionIndex = Math.floor(angle / 72); // 360°/5 = 72° per sector
            activeFifthRef.current = regionIndex;
        };

        canvas.addEventListener('click', handleClick);

        const draw = () => {
            const now = performance.now();
            const time = now - startTime;
            ctx.clearRect(0, 0, width, height);

            const cellWidth = width / gridSize;
            const cellHeight = height / gridSize;

            // Tame the focal movement by reducing speed/amplitude.
            const focalX = gridSize / 2 + Math.sin(time * 0.001) * (gridSize / 4);
            const focalY = gridSize / 2 + Math.cos(time * 0.0015) * (gridSize / 4);

            for (let row = 0; row < gridSize; row++) {
                for (let col = 0; col < gridSize; col++) {
                    let cellCenterX = col * cellWidth + cellWidth / 2;
                    let cellCenterY = row * cellHeight + cellHeight / 2;

                    const dx = cellCenterX - centerX;
                    const dy = cellCenterY - centerY;
                    const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
                    if (distanceFromCenter > radius) continue; // Skip cells outside the circle

                    // Determine cell's polar angle (in degrees)
                    const cellAngle = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;

                    // Fluid simulation (tamed)
                    const wave1 = Math.sin((col / gridSize) * 2 * Math.PI + time * 0.001);
                    const wave2 = Math.cos((row / gridSize) * 2 * Math.PI + time * 0.001);
                    const wave3 = Math.sin(((col + row) / gridSize) * 2 * Math.PI + time * 0.0008);
                    let intensity = 0.33 * wave1 + 0.33 * wave2 + 0.34 * wave3;
                    intensity = (intensity + 1) / 2;
                    const focal = Math.exp(-(((row - focalX) ** 2 + (col - focalY) ** 2) / gridSize)) * 0.3;
                    intensity = Math.min(intensity + focal, 1);

                    // Inactive cells: shades of blue (fixed hue 210)
                    const lightness = 0.3 + intensity * 0.4; // from ~0.3 to ~0.7
                    let cellColor = hslToRgb(210, 1, lightness);

                    // If a fifth is active and this cell lies within that angular sector…
                    if (activeFifthRef.current !== null) {
                        const regionStart = activeFifthRef.current * (70 + Math.sin(time * 0.003));
                        const regionEnd = (activeFifthRef.current + 1) * (70 + Math.cos(time * 0.003));
                        if (cellAngle >= regionStart && cellAngle < regionEnd) {
                            // Oscillatory radial expansion (e.g., up to ~5 pixels)
                            const expansion = 5 * (1 + Math.sin(time * 0.005));
                            if (distanceFromCenter > 0) {
                                cellCenterX = centerX + dx + (dx / distanceFromCenter) * expansion;
                                cellCenterY = centerY + dy + (dy / distanceFromCenter) * expansion;
                            }

                            // Compute a gradient for the active fifth *along the radial direction within that sector*.
                            // Define the active region parameters (relative to the full circle radius):
                            const activeCenter = 0.5 * radius; // "center" of the active fifth (midway along the radius)
                            const activeWidth = radius;  // width over which the active gradient applies
                            // Compute a normalized value based on the cell's distance from the active center.
                            // t = 0 at the active center (most active, red) and t = 1 at the boundaries.
                            const diff = Math.abs(distanceFromCenter - activeCenter);
                            const t = Math.min(diff / (activeWidth / 2), 1);

                            // Define our gradient colors:
                            // At t=0: red (active core of the sector)
                            // At t=0.5: orange
                            // At t=1: blue (blending with the inactive region)
                            const red = hslToRgb(0, 1, 0.5);
                            const orange = hslToRgb(30, 1, 0.5);
                            const blue = hslToRgb(210, 1, 0.5);
                            let activeColor;
                            if (t < 0.5) {
                                activeColor = blendColors(red, orange, t * 2);
                            } else {
                                activeColor = blendColors(orange, blue, (t - 0.5) * 2);
                            }
                            cellColor = activeColor;
                        }
                    }

                    ctx.fillStyle = `rgb(${cellColor.r}, ${cellColor.g}, ${cellColor.b})`;
                    ctx.fillRect(col * cellWidth, row * cellHeight, cellWidth, cellHeight);
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            canvas.removeEventListener('click', handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, [gridSize, width, height]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            style={{
                border: '1px solid #ccc',
                display: 'block',
                borderRadius: '50%',
                overflow: 'hidden'
            }}
        />
    );
};

export default BrainActivitySimulator;
