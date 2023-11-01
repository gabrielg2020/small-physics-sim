function animate (particles) {
    particles.forEach(particle => {
        particle.setPosition([particle.x + 10 ,particle.y]);
    });

    requestAnimationFrame(() => animate(particles));
}

export default animate;