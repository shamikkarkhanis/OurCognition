import React, { useState } from 'react';

const HeatMap = () => {
    const gridSize = 20;  // Reduced grid size for better visualization
    const initialGrid = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
    const [heatData, setHeatData] = useState(initialGrid);

    // Function to generate heat pattern based on a circular distance
    const handleMouseOver = (rowIndex, colIndex) => {
        const newHeatData = Array.from({ length: gridSize }, (_, row) =>
            Array.from({ length: gridSize }, (_, col) => {
                // Calculate Euclidean distance for circular effect
                const distance = Math.sqrt(
                    Math.pow(row - rowIndex, 2) + Math.pow(col - colIndex, 2)
                );

                // Heat intensity decreases as distance increases
                const intensity = Math.max(0, 1 - distance * 0.1);
                return intensity;
            })
        );
        setHeatData(newHeatData);
    };

    return (
        <div className="flex flex-col items-center p-8">
            <div
                className="grid"
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                    gap: '2px',
                    width: 'min(500px, 90vw)',
                    height: 'min(500px, 90vw)',
                    border: '2px solid #ccc',
                }}
            >
                {heatData.map((row, rowIndex) =>
                    row.map((intensity, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className="aspect-square cursor-pointer"
                            style={{
                                backgroundColor: `rgba(${255 * intensity}, 0, ${255 * (1 - intensity)}, ${intensity})`,
                                transition: 'background-color 0.3s ease',
                                border: '1px solid #eee',
                                width: '100%',
                                height: '100%',
                            }}
                            onMouseOver={() => handleMouseOver(rowIndex, colIndex)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default HeatMap;
