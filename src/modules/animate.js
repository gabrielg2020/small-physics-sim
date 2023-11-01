import { calcParticleDisplacement, calcParticleVelocity } from "./engine.js";

function animate(particles) {
    const currentTime = window.performance.now();
    particles.forEach(particle => {
        const deltaTime = (currentTime - particle.getTime()) / 1000;
        
        const displacement = calcParticleDisplacement(particle, deltaTime);
        particle.setPosition(particle.getPosition().map((element, index) => element + displacement[index]));

        const velocity = calcParticleVelocity(particle, deltaTime);
        particle.setVelocity(velocity);

        console.log(particle.getVelocity());
    });

    requestAnimationFrame(() => animate(particles));
}

export default animate;