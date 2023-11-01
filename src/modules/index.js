import createParticle from "./createParticle.js";

const particles = [];
const viewPort = document.querySelector('#viewPort');

viewPort.addEventListener('click', (e) => {
    particles.push(createParticle(e, 10));
    console.log(particles);
});