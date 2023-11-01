class Particle {
    constructor(x, y, mass) {
        this.x = x;
        this.y = y;
        this.mass = mass;
        this.svg = undefined;
        // need to create svg for particle
    }

    getPosition() {
        return [this.x, this.y];
    }

    getMass() {
        return this.mass;
    }

    getSVG() {
        return this.svg;
    }
}

export default Particle;