import {viewPort} from "../consts.js";
import Particle from "../classes/particle.js";

function createParticle (e, mass) {
    const viewPortRect = viewPort.getBoundingClientRect();

    const x = e.clientX - viewPortRect.left;
    const y = e.clientY - viewPortRect.top;

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', mass);
    circle.setAttribute('fill', 'white');

    return new Particle(x, y, mass, circle);
}

export default createParticle;