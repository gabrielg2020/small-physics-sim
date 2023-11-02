import { canvas, massInput, viewPort } from "../global.js";
import animate from "./animate.js";
import createParticle from "./createParticle.js";

const particles = [];

animate(particles);

canvas.addEventListener('click', (e) => {
    const mass = Number(massInput.value);
    const newParticle = createParticle(e, mass);
    particles.push(newParticle);
    viewPort.appendChild(newParticle.getCircle());
});