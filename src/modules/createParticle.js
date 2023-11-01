import Particle from "../classes/particle.js";

function createParticle (e, mass) {
    const x = e.clientX;
    const y = e.clientY;

    return new Particle(x, y, mass);
}

export default createParticle;