// utils/colorUtils.js

// Convert HSL to RGB
export function hslToRgb(h, s, l) {
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const hPrime = h / 60;
    const x = c * (1 - Math.abs((hPrime % 2) - 1));
    let [r1, g1, b1] = [0, 0, 0];

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

// Blend two colors
export function blendColors(color1, color2, factor) {
    return {
        r: Math.round(color1.r * (1 - factor) + color2.r * factor),
        g: Math.round(color1.g * (1 - factor) + color2.g * factor),
        b: Math.round(color1.b * (1 - factor) + color2.b * factor),
    };
}
