let mover;
let wind;
let gravity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new MoverNoMass(width / 2, height / 2, 50);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
}

function draw() {
  background(255);

  mover.addAcc(gravity);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    // 마우스 클릭할때만 바람 불게 만들기
    mover.addAcc(wind);
  }

  mover.checkEdges();
  mover.update();
  mover.display();
  mover.displayVector();
}
