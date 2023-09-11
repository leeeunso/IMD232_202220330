function setup() {
  setCanvasContainer('canvas', 960, 640);

  background(255);
  noStroke();
  fill('red');
}

function draw() {
  background(255);
  circle(mouseX, mouseY, 50);
}
