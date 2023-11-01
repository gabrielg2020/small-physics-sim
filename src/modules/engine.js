import { a } from "../global.js";

export function calcParticleDisplacement(particle, deltaTime) {
    const velocity = particle.getVelocity();

    const displacementX = (velocity[0] * deltaTime) + ((a[0] / 2) * deltaTime**2);
    const displacementY = (velocity[1] * deltaTime) + ((a[1] / 2) * deltaTime**2);

    return [displacementX, displacementY];
}

export function calcParticleVelocity(particle, deltaTime) {
    const velocity = particle.getVelocity();

    const velocityX = (velocity[0] + (a[0] * deltaTime));
    const velocityY = (velocity[1] + (a[1] * deltaTime));

    return [velocityX, velocityY];
}