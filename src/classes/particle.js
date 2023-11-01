class Particle {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.mass = 0;
        this.timeSpawned = window.performance.now();
        this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.updateCircle();
    }

    setPosition(pos) {
        this.x = pos[0];
        this.y = pos[1];
        this.updateCircle();
    }

    getPosition() {
        return [this.x, this.y];
    }

    setMass(mass) {
        this.mass = mass;
        this.updateCircle();
    }

    getMass() {
        return this.mass;
    }

    getTime() {
        return this.timeSpawned;
    }

    updateCircle() {
        this.circle.setAttribute('cx', this.x);
        this.circle.setAttribute('cy', this.y);
        this.circle.setAttribute('r', this.mass);
        this.circle.setAttribute('fill', 'white');
    }

    getCircle() {
        return this.circle;
    }
}

export default Particle;