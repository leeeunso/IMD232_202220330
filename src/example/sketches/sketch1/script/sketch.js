function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);
  noStroke();
  fill('red');
}

function draw() {
  background(255);
  circle(mouseX, mouseY, 50);
}
