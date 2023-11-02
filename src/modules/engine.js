import { a } from "../global.js";

export function calcParticlePosition(particle, deltaTime) {
    const velocity = particle.getVelocity();
    const position = particle.getPosition();

    const positionX = position[0] + (velocity[0] * deltaTime);
    const positionY = position[1] + (velocity[1] * deltaTime);

    return [positionX, positionY];
}

export function calcParticleVelocity(particle, deltaTime) {
    const velocity = particle.getVelocity();

    const velocityX = (velocity[0] + (a[0] * deltaTime));
    const velocityY = (velocity[1] + (a[1] * deltaTime));

    return [velocityX, velocityY];
}