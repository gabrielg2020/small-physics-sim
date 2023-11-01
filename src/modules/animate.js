import { viewPort } from "../global.js";
import { calcParticleDisplacement, calcParticleVelocity } from "./engine.js";

function animate(particles) {
    const currentTime = window.performance.now();
    particles.forEach((particle, index) => {
        const deltaTime = (currentTime - particle.getTime()) / 1000;
        const position = particle.getPosition();
        
        const displacement = calcParticleDisplacement(particle, deltaTime);
        particle.setPosition(position.map((element, index) => element + displacement[index]));

        const velocity = calcParticleVelocity(particle, deltaTime);
        particle.setVelocity(velocity);

        if (particle.x < 0 || particle.x > viewPort.clientWidth ||
            particle.y < 0 || particle.y > viewPort.clientHeight) {
            particles.splice(index, 1);
            particle.getCircle().remove();

            console.log(particles);
        }

    });

    requestAnimationFrame(() => animate(particles));
}

export default animate;