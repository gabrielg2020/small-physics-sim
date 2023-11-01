import {viewPort} from "../consts.js";
import createParticle from "./createParticle.js";

const particles = [];

viewPort.addEventListener('click', (e) => {
    const newParticle = createParticle(e, 10)
    particles.push(newParticle);
    viewPort.appendChild(newParticle.getCircle());
});