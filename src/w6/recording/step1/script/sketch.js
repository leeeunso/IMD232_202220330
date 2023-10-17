class Emitter {
  constructor() {
    this.emittingPos;
    this.balls = [];
  }
}

// createBall () {
//     this.balls.push(
//         new Ball(
//             this.emittingPos.x
//             this.emittingPos.y
//         )
//     )
// }

class Ball {
  constructor(posX, posY, mass, h, s, v) {
    this.pos = createVector(posX, posY);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = this.mass * 5;
    this.color = color(h, s, v);
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    // const calceAcc = force.div(this.mass);
    // 이 코드는 힘이 한번 나눠지면 다음에 돌때 그 나눠진 값이 그대로 적용된다.
    // 위 코드를 사용하면 복사후 나누기때문에 다음에도 같은 힘이 적용됨
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    // this.vel.limit(5);
    this.pos.add(this.vel);
    // this.acc.set(0,0);
    // this.acc.setMag(0);
    this.acc.mult(0);
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }
}

let balls = [];
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100);
  for (let n = 0; n < 10; n++) {
    balls.push(new Ball(random(width), 0, random(1, 20), random(360), 100, 50));
  }

  gravity = createVector(0, 0.1);
  wind = createVector(0.5, 0);

  background(255);
}

function draw() {
  background(255);
  balls.forEach((each) => {
    const scaledG = p5.Vector.mult(gravity, each.mass);
    gravity.mult();
    // each.applyForce();
    each.applyForce(wind);
    each.update();
    each.display();
  });
}

function mousePressed() {
  for (let n = 0; n < balls.length; n++) {
    balls[n] = new Ball(random(width), 0, random(1, 20), random(360), 100, 50);
  }
}
