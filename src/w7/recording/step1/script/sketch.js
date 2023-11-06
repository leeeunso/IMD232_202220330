let vehicle;
let mVec;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  vehicle = new Vehicle(width / 2, height / 2, 1, 20, 10, 0.1);
  mVec = createVector();

  background(255);
}

function draw() {
  mVec.set(mouseX, mouseY);

  vehicle.seek(mVec);
  vehicle.update();
  background(255);
  vehicle.display();
}
