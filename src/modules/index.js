import { canvas, viewPort } from "../global.js";
import animate from "./animate.js";
import createParticle from "./createParticle.js";

const particles = [];

animate(particles);

canvas.addEventListener('click', (e) => {
    const newParticle = createParticle(e, 10);
    particles.push(newParticle);
    viewPort.appendChild(newParticle.getCircle());
});