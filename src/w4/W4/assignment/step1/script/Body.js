// Original Code from: https://editor.p5js.org/natureofcode/sketches/uT9VpVvCO
// Daniel Shiffman
// The Nature of Code
// Example 2-9: N-Bodies Attraction

//Modified by OO-SUNG SON (spctrm404)

class Body {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = 8;
    this.radius = this.mass ** (1 / 2) * 4;
    this.velocityVisualization = createVector(0, 0);
    this.accelerationVisualization = createVector(0, 0);
  }

  attract(body) {
    let force = p5.Vector.sub(this.position, body.position);
    let distance = constrain(force.mag(), 5, 25);
    let strength = (G * (this.mass * body.mass)) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    let forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acceleration.add(forceDividedByMass);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.velocityVisualization.set(this.velocity);
    this.velocityVisualization.mult(10);

    this.accelerationVisualization.set(this.acceleration);
    this.accelerationVisualization.mult(100);

    this.acceleration.set(0, 0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    circle(this.position.x, this.position.y, this.radius * 2);
  }

  displayVectors() {
    noFill();
    stroke('red');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.velocityVisualization.x,
      this.position.y + this.velocityVisualization.y
    );
    stroke('blue');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.accelerationVisualization.x,
      this.position.y + this.accelerationVisualization.y
    );
  }
}
