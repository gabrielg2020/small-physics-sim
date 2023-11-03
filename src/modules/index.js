import { canvas, viewPort } from "../global.js";
import { massInput } from "./ui.js";
import animate from "./animate.js";
import createParticle from "./createParticle.js";

const particles = [];

animate(particles);

canvas.addEventListener('click', (e) => {
    const mass = Number(massInput);
    console.log(mass);
    const newParticle = createParticle(e, mass);
    particles.push(newParticle);
    viewPort.appendChild(newParticle.getCircle());
});