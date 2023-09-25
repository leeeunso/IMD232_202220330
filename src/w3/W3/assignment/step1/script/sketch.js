let mover;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new Mover(width / 2, height / 2, 50);
}

function draw() {
  background(255);

  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVectors();
}
