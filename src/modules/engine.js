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

export function checkPlaneParticleCollision(plane, particle) {
    const planeSize = plane.getBoundingClientRect();
    const position = particle.getPosition();
    const mass = particle.getMass();
    const velocity = particle.getVelocity()

    if (position[0] - mass < 0 || position[0] + mass > planeSize.width) {
        particle.setVelocity([-velocity[0], velocity[1]])
    } else if (position[1] - mass < 0 || position[1] + mass > planeSize.height){
        particle.setVelocity([velocity[0], -velocity[1]])
    }
}