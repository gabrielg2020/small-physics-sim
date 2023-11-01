class Particle {
    constructor(x, y, mass, circle) {
        this.x = x;
        this.y = y;
        this.mass = mass;
        this.circle = circle;
        // need to create svg for particle
    }

    getPosition() {
        return [this.x, this.y];
    }

    getMass() {
        return this.mass;
    }

    getCircle() {
        return this.circle;
    }
}

export default Particle;