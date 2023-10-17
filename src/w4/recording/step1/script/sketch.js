let mover;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new MoverNoMass(width / 2, height / 2, 50);
}

function draw() {
  background(255);

  mover.checkEdges();
  mover.update();
  mover.display();
  mover.displayVector();
}
