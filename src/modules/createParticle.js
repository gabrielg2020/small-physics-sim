import { velocityInput, viewPort } from "../global.js";
import Particle from "../classes/particle.js";

function createParticle (e, mass) {
    const viewPortRect = viewPort.getBoundingClientRect();
    const newParticle = new Particle()

    newParticle.setPosition([e.clientX - viewPortRect.left, e.clientY - viewPortRect.top]);
    newParticle.setVelocity(velocityInput);
    newParticle.setMass(mass);

    return newParticle;
}

export default createParticle;