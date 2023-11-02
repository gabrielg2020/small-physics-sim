class Particle {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.radius = 0;
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

    setVelocity(vel) {
        this.vx = vel[0];
        this.vy = vel[1];
    }

    getVelocity() {
        return [this.vx, this.vy];
    }

    setRadius(radius) {
        this.radius = radius;
        this.updateCircle();
    }

    getRadius() {
        return this.radius;
    }

    updateCircle() {
        this.circle.setAttribute('cx', this.x);
        this.circle.setAttribute('cy', this.y);
        this.circle.setAttribute('r', this.radius);
        this.circle.setAttribute('fill', 'white');
    }

    getCircle() {
        return this.circle;
    }
}

export default Particle;