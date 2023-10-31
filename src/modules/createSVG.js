function createParticleSVG(mass) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", mass);
    svg.setAttribute("height", mass);

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", mass / 2);
    circle.setAttribute("cy", mass / 2);
    circle.setAttribute("r", mass / 2);
    circle.setAttribute("fill", "white");

    svg.appendChild(circle);

    return svg
}

export default createParticleSVG