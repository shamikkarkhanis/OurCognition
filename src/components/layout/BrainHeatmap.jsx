import React, { useState, useEffect, useRef, useCallback } from "react";
import { hslToRgb } from '../utils/colorUtils';
import '../../styles/BrainHeatmap.css';
import brainRegionsBase from '../common/BrainRegionsBase'

/**
 * BrainMap - Interactive brain region visualization component
 * 
 * Displays brain regions that pulse with color animations and can be toggled
 * between "cool" and "warm" states through user interaction.
 */
const BrainMap = React.memo(() => {
    // State for animation timing
    const [animationTime, setAnimationTime] = useState(0);
    // Track which regions are in "warm" mode (toggled by clicking)
    const [selectedRegions, setSelectedRegions] = useState({});

    // Animation constants
    const ANIMATION_PERIOD = 5000; // 5-second cycle for color oscillation
    const TARGET_FPS = 30; // Limit framerate for performance

    // Convert animation time to a phase angle (in radians)
    const calculatePhase = useCallback((time) => {
        return (time % ANIMATION_PERIOD) * ((2 * Math.PI) / ANIMATION_PERIOD);
    }, []);

    // Set up animation loop with controlled framerate
    useEffect(() => {
        let animationFrameId;
        let lastTimestamp = 0;
        const frameInterval = 1000 / TARGET_FPS;

        const updateTime = (timestamp) => {
            if (timestamp - lastTimestamp >= frameInterval) {
                setAnimationTime(timestamp);
                lastTimestamp = timestamp;
            }
            animationFrameId = requestAnimationFrame(updateTime);
        };

        // Start animation loop
        animationFrameId = requestAnimationFrame(updateTime);

        // Clean up animation on unmount
        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    // Toggle selected state for clicked regions
    const handleRegionClick = useCallback((regionId) => {
        setSelectedRegions((prev) => ({
            ...prev,
            [regionId]: !prev[regionId],
        }));
    }, []);

    // Create and manage tooltips for brain regions
    const handleMouseEnter = useCallback((e, region) => {
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.style.position = 'absolute';
        tooltip.style.left = `${e.clientX + 10}px`;
        tooltip.style.top = `${e.clientY + 10}px`;
        tooltip.style.padding = '5px';
        tooltip.style.background = '#333';
        tooltip.style.color = 'white';
        tooltip.style.borderRadius = '3px';
        tooltip.style.fontSize = '12px';
        tooltip.style.pointerEvents = 'none';
        tooltip.textContent = region.name || region.id;
        document.body.appendChild(tooltip);

        // Store tooltip reference
        e.target.tooltip = tooltip;
    }, []);

    // Remove tooltip on mouse leave
    const handleMouseLeave = useCallback((e) => {
        if (e.target.tooltip) {
            e.target.tooltip.remove();
            e.target.tooltip = null;
        }
    }, []);

    // Current phase based on animation time
    const phase = calculatePhase(animationTime);

    // Shared styles for brain regions
    const regionStyle = {
        transition: "fill 0.5s ease, stroke 0.2s ease",
        cursor: "pointer"
    };

    // Ensure brainRegionsBase is defined or provide a default
    if (!brainRegionsBase || !Array.isArray(brainRegionsBase) || brainRegionsBase.length === 0) {
        console.error('Brain regions data is missing or invalid');
        return <div className="error-message">Brain data unavailable</div>;
    }

    return (
        <div className="brain-map-container w-full h-full">
            <svg
                width="100%"
                height="100%"
                viewBox="0 90 200 120"
                preserveAspectRatio="xMidYMid meet"
                aria-label="Interactive brain region map"
            >
                {brainRegionsBase.map((region, index) => {
                    // Skip rendering if region is invalid
                    if (!region || !region.id || !region.path) {
                        return null;
                    }

                    // Calculate color based on phase and selected state
                    const regionPhase = phase + index * 0.3; // Offset each region slightly
                    const isWarm = !!selectedRegions[region.id];

                    // Warm colors (reds/oranges) when selected, cool colors (blues) when not
                    const effectiveHue = isWarm
                        ? 30 + 30 * Math.sin(regionPhase - Math.PI / 2)  // Orange-red range
                        : 240 + 60 * Math.sin(regionPhase - Math.PI / 2); // Blue-purple range

                    // Convert HSL to RGB using the imported utility function
                    const rgb = hslToRgb(effectiveHue, 1, 0.5);
                    const fillColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

                    return (
                        <g
                            key={region.id}
                            className={`region-wrapper ${isWarm ? 'warm' : 'cool'}`}
                            onClick={() => handleRegionClick(region.id)}
                            role="button"
                            aria-pressed={isWarm}
                            aria-label={`Brain region: ${region.name || region.id}`}
                        >
                            <path
                                id={region.id}
                                d={region.path}
                                fill={fillColor}
                                className="brain-region"
                                data-region-name={region.name}
                                data-region-id={region.id}
                                style={regionStyle}
                                onMouseEnter={(e) => {
                                    e.target.style.stroke = "#333";
                                    e.target.style.strokeWidth = "1";
                                    // Move this element to the front for better visibility
                                    e.target.parentNode.appendChild(e.target);
                                    // Add tooltip label
                                    handleMouseEnter(e, region);
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.stroke = "none";
                                    e.target.style.strokeWidth = "0";
                                    // Remote tooltip label
                                    handleMouseLeave(e);
                                }}
                            />
                        </g>
                    );
                })}
            </svg>
        </div>
    );
});

// PropTypes validation
BrainMap.propTypes = {};

// Display name for debugging
BrainMap.displayName = 'BrainMap';

export default BrainMap;