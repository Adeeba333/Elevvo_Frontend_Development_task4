import { colors } from "../data/data.js";

export function makeImage(category) {
    const [bg, fg] = colors[category];
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='240'>
        <rect width='400' height='240' fill='${bg}'/>
        <text x='200' y='130' font-size='36' fill='${fg}' text-anchor='middle' font-family='Georgia,serif'>${category}</text></svg>`;
    return "data:image/svg+xml," + encodeURIComponent(svg);
    }

    export function formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}