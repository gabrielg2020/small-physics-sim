class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getPosition() {
        return [this.x, this.y];
    }
}

export default Particle;