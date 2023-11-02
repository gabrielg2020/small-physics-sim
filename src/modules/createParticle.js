import { viewPort } from "../global.js";
import Particle from "../classes/particle.js";

function createParticle (e, radius) {
    const viewPortRect = viewPort.getBoundingClientRect();
    const newParticle = new Particle()

    newParticle.setPosition([e.clientX - viewPortRect.left, e.clientY - viewPortRect.top]);
    newParticle.setRadius(radius);

    return newParticle;
}

export default createParticle;