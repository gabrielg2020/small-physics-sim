function animate(particles) {
    const currentTime = window.performance.now();
    particles.forEach(particle => {
        const deltaTime = (currentTime - particle.getTime()) / 1000;
        console.log(currentTime);
        particle.setPosition([(particle.x + 20 * deltaTime), particle.y]);
    });

    requestAnimationFrame(() => animate(particles));
}

export default animate;