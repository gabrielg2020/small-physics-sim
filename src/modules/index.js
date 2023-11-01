import { viewPort } from "../global.js";
import animate from "./animate.js";
import createParticle from "./createParticle.js";

const particles = [];

animate(particles);

viewPort.addEventListener('click', (e) => {
    const newParticle = createParticle(e, 10);
    particles.push(newParticle);
    viewPort.appendChild(newParticle.getCircle());
});

const sidebar = document.querySelector('#sidebar')

sidebar.addEventListener('click', () => {
    particles[0].setPosition([particles[0].x + 10 ,10])
    console.log(particles[0].x);
})
