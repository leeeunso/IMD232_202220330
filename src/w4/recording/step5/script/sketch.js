let moverA;
let moverB;
let wind;
let gravity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new Mover(width / 3, height / 2, 10);
  moverB = new Mover((2 * width) / 3, height / 2, 1);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
}

function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    // 마우스 클릭할때만 바람 불게 만들기
    moverA.applyForce(wind);
  }
  if (moverA.contactEdges()) {
    let c = 0.9;
    // let friction = createVector(moverA.vel.x, moverA.vel.y);
    let friction = moverA.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    moverA.applyForce(friction);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVector();

  let gravityB = createVector(gravity.x, gravity.y);
  gravityB.mult(moverB.mass);
  moverB.applyForce(gravityB);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    // 마우스 클릭할때만 바람 불게 만들기
    moverB.applyForce(wind);
  }

  if (moverB.contactEdges()) {
    let c = 0.9;
    // let friction = createVector(moverA.vel.x, moverA.vel.y);
    let friction = moverB.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    moverB.applyForce(friction);
  }
  moverB.update();
  moverB.checkEdges();
  moverB.display();
  moverB.displayVector();
}
