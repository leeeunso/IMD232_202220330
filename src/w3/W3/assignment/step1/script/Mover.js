class Mover {
  constructor(x, y, r) {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = p5.Vector.random2D();
    this.radius = r;
    this.acc.mult(0.1);
  }

  update() {
    this.acc = p5.Vector.random2D();
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(10);
  }

  checkEdges() {
    if (this.pos.x < 0) {
      this.pos.x = width;
    } else if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    } else if (this.pos.y > height) {
      this.pos.y = 0;
    }
  }

  display() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
    stroke(0);
    line(this.pos.x, this.pos.y, mouseX, mouseY);
  }

  displayVectors() {
    stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    stroke('blue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.acc.x * 100,
      this.pos.y + this.acc.y * 100
    );
  }
}
