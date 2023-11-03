import { canvas } from "../global.js";
import { calcParticlePosition, calcParticleVelocity, checkPlaneParticleCollision } from "./engine.js";

function animate(particles) {
    particles.forEach((particle) => {
        const deltaTime = 1/60

        const nextFrameVelocity = calcParticleVelocity(particle, deltaTime);
        particle.setVelocity(nextFrameVelocity);

        const nextFramePosition = calcParticlePosition(particle, deltaTime);
        particle.setPosition(nextFramePosition);

        checkPlaneParticleCollision(canvas, particle);
    });

    requestAnimationFrame(() => animate(particles));
}

export default animate;