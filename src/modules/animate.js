import { canvas } from "../global.js";
import { calcParticlePosition, calcParticleVelocity } from "./engine.js";

function animate(particles) {
    particles.forEach((particle) => {
        const deltaTime = 1/60
        const nextFramePosition = calcParticlePosition(particle, deltaTime);
        particle.setPosition(nextFramePosition);

        const nextFrameVelocity = calcParticleVelocity(particle, deltaTime);
        particle.setVelocity(nextFrameVelocity);

        // bounds checking
        const canvasSize = canvas.getBoundingClientRect();

        if (particle.x < 0 || particle.x > canvasSize.width) {
            particle.vx = particle.vx * -1;
        } else if (particle.y < 0 || particle.y > canvasSize.height){
            particle.vy = particle.vy * -1;
        }

    });

    requestAnimationFrame(() => animate(particles));
}

export default animate;