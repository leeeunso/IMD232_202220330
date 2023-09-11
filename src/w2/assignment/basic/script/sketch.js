function setup() {
  setCanvasContainer('canvas');

  background(255);
  noStroke();
  fill('red');
}

function draw() {
  background(255);
  circle(mouseX, mouseY, 50);
}
