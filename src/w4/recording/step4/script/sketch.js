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
  moverA.checkEdges();
  moverA.update();
  moverA.display();
  moverA.displayVector();

  let gravityB = createVector(gravity.x, gravity.y);
  gravityB.mult(moverB.mass);
  moverB.applyForce(gravityB);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    // 마우스 클릭할때만 바람 불게 만들기
    moverB.applyForce(wind);
  }
  moverB.checkEdges();
  moverB.update();
  moverB.display();
  moverB.displayVector();
}
