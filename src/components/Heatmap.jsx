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

// Helper: Check if an angle (in degrees) lies within a sector [start, end) (handles wrap-around)
function isAngleInSector(angle, start, end) {
    if (start < end) {
        return angle >= start && angle < end;
    } else {
        // sector wraps past 360
        return angle >= start || angle < end;
    }
}

// Helper: Compute the shortest delta between two sector values (on a circle of 5 sectors)
function shortestDelta(from, to) {
    let delta = to - from;
    while (delta > 2.5) delta -= 5;
    while (delta < -2.5) delta += 5;
    return delta;
}

const BrainActivitySimulator = ({
    gridSize = 200,
    width = 500,
    height = 500,
}) => {
    const canvasRef = useRef(null);
    // activeState holds the continuous active sector info, transition data, and fading trails.
    const activeState = useRef({
        current: null,    // continuous active sector (in [0,5))
        target: null,     // target sector (integer 0-4)
        from: null,       // starting value for transition
        transitionStart: 0,
        transitionDuration: 1000, // ms
        trails: []        // each trail: { sector: number, startTime: number }
    });

    // Trail fade duration in ms
    const trailDuration = 2000;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        const startTime = performance.now();
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2;

        // On click, determine which 72° sector was clicked.
        const handleClick = (e) => {
            const nowClick = performance.now();
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            const dx = clickX - centerX;
            const dy = clickY - centerY;
            const angle = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;
            const newSector = Math.floor(angle / 72); // Each sector is 72° (360/5)

            // Initialize activeState if not yet done.
            if (activeState.current.current === null) {
                activeState.current.current = newSector;
                activeState.current.target = newSector;
                activeState.current.from = newSector;
                activeState.current.transitionStart = nowClick;
            } else {
                const stateObj = activeState.current;
                // If the clicked sector is different from the current target, start a transition.
                if (newSector !== stateObj.target) {
                    // Add the old target to trails.
                    stateObj.trails.push({ sector: stateObj.target, startTime: nowClick });
                    stateObj.from = stateObj.current; // Start transition from current value.
                    stateObj.target = newSector;
                    stateObj.transitionStart = nowClick;
                }
            }
        };

        canvas.addEventListener('click', handleClick);

        const draw = () => {
            const now = performance.now();
            const time = now - startTime;
            ctx.clearRect(0, 0, width, height);

            // Update activeState transition if needed.
            const stateObj = activeState.current;
            if (stateObj && stateObj.target !== null && stateObj.current !== null) {
                if (stateObj.current !== stateObj.target) {
                    const progress = Math.min((now - stateObj.transitionStart) / stateObj.transitionDuration, 1);
                    const delta = shortestDelta(stateObj.from, stateObj.target);
                    stateObj.current = (stateObj.from + delta * progress + 5) % 5;
                    if (progress === 1) {
                        stateObj.current = stateObj.target;
                    }
                }
            }

            // Clean up expired trails.
            if (stateObj && stateObj.trails.length > 0) {
                stateObj.trails = stateObj.trails.filter(trail => now - trail.startTime < trailDuration);
            }

            const cellWidth = width / gridSize;
            const cellHeight = height / gridSize;

            // Tame the focal movement.
            const focalX = gridSize / 2 + Math.sin(time * 0.001) * (gridSize / 4);
            const focalY = gridSize / 2 + Math.cos(time * 0.0015) * (gridSize / 4);

            for (let row = 0; row < gridSize; row++) {
                for (let col = 0; col < gridSize; col++) {
                    let cellCenterX = col * cellWidth + cellWidth / 2;
                    let cellCenterY = row * cellHeight + cellHeight / 2;

                    const dx = cellCenterX - centerX;
                    const dy = cellCenterY - centerY;
                    const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
                    if (distanceFromCenter > radius) continue;

                    // Compute cell polar angle (in degrees)
                    const cellAngle = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;

                    // Compute fluid simulation intensity (tamed)
                    const wave1 = Math.sin((col / gridSize) * 2 * Math.PI + time * 0.001);
                    const wave2 = Math.cos((row / gridSize) * 2 * Math.PI + time * 0.001);
                    const wave3 = Math.sin(((col + row) / gridSize) * 2 * Math.PI + time * 0.0008);
                    let intensity = 0.33 * wave1 + 0.33 * wave2 + 0.34 * wave3;
                    intensity = (intensity + 1) / 2;
                    const focal = Math.exp(-(((row - focalX) ** 2 + (col - focalY) ** 2) / gridSize)) * 0.3;
                    intensity = Math.min(intensity + focal, 1);
                    const lightness = 0.3 + intensity * 0.4; // ranges roughly 0.3 to 0.7
                    const inactiveColor = hslToRgb(210, 1, lightness);
                    let finalColor = inactiveColor;
                    let activeWeight = 0;
                    let applyExpansion = false;

                    // Check if cell is in active sector (or any trail)
                    if (stateObj && stateObj.target !== null) {
                        // Current active sector:
                        const activeSector = stateObj.current; // continuous value, e.g., 1.3
                        const regionStartCurrent = (activeSector * (72 + Math.sin(time * 0.005))) % 360;
                        const regionEndCurrent = (regionStartCurrent + (72 + Math.cos(time * 0.005))) % 360;
                        if (isAngleInSector(cellAngle, regionStartCurrent, regionEndCurrent)) {
                            activeWeight = 1;
                            applyExpansion = true;
                        }
                        // Add contribution from trails.
                        stateObj.trails.forEach((trail) => {
                            const trailStart = trail.sector * 72;
                            const trailEnd = (trailStart + 72) % 360;
                            if (isAngleInSector(cellAngle, trailStart, trailEnd)) {
                                const trailAlpha = 1 - (now - trail.startTime) / trailDuration;
                                activeWeight = Math.max(activeWeight, trailAlpha);
                            }
                        });
                    }

                    // If activeWeight > 0, compute an active color gradient for this cell.
                    if (activeWeight > 0) {
                        // Define gradient along the radial direction of this sector:
                        // We map the cell's distance from the center (0 to radius) into a gradient.
                        const activeCenter = 0.5 * radius; // center of the active gradient along radius
                        const activeWidth = 0.5 * radius;  // gradient spans this distance
                        const diff = Math.abs(distanceFromCenter - activeCenter);
                        const t = Math.min(diff / (activeWidth / 2), 1);
                        // Colors: at the center of the active sector: red; then orange; then blend into blue (inactive).
                        const red = hslToRgb(0, 1, 0.5);
                        const orange = hslToRgb(30, 1, 0.5);
                        const blue = hslToRgb(210, 1, 0.5);
                        let activeColor;
                        if (t < 0.5) {
                            activeColor = blendColors(red, orange, t * 2);
                        } else {
                            activeColor = blendColors(orange, blue, (t - 0.5) * 2);
                        }
                        finalColor = blendColors(inactiveColor, activeColor, activeWeight);
                    }

                    // Apply expansion if this cell is in the current active (non-trail) region.
                    if (applyExpansion) {
                        const expansion = 5 * (1 + Math.sin(time * 0.005));
                        if (distanceFromCenter > 0) {
                            cellCenterX = centerX + dx + (dx / distanceFromCenter) * expansion;
                            cellCenterY = centerY + dy + (dy / distanceFromCenter) * expansion;
                        }
                    }

                    ctx.fillStyle = `rgb(${finalColor.r}, ${finalColor.g}, ${finalColor.b})`;
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
