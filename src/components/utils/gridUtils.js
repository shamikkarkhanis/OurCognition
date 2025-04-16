// Compute the intensity of wave effects for a grid cell.
// Combines three sine/cosine waves to produce a smooth, oscillating intensity.
// The result is normalized to a value between 0 and 1.
export function computeWaveIntensity(row, col, gridSize, time) {
    // Horizontal wave across columns.
    const wave1 = Math.sin((col / gridSize) * 2 * Math.PI + time * 0.002);
    // Vertical wave across rows.
    const wave2 = Math.cos((row / gridSize) * 2 * Math.PI + time * 0.0025);
    // Diagonal wave combining both row and column influences.
    const wave3 = Math.sin(((col + row) / gridSize) * 2 * Math.PI + time * 0.001);

    // Combine waves with respective weights.
    const intensity = 0.33 * wave1 + 0.33 * wave2 + 0.34 * wave3;

    // Normalize from [-1, 1] to [0, 1]
    return (intensity + 1) / 2;
}

// Compute a focal effect based on the cell's distance from a focal point.
// Uses an exponential decay so that cells nearer the focal point are brighter.
export function computeFocalEffect(row, col, focalX, focalY, gridSize) {
    // Calculate the squared Euclidean distance between the cell and the focal point.
    const distanceSquared = ((row - focalX) ** 2 + (col - focalY) ** 2);
    // Exponential decay gives a focal effect that decreases with distance.
    return Math.exp(-distanceSquared / gridSize) * 0.5;
}

