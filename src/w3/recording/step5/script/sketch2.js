let cv;
let mv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
}
function draw() {
  background('salmon');
  stroke('cornflowerblue');
  line(0, 0, cv.x, cv.y);

  mv.x = mouseX;
  mv.y = mouseY;
  stroke('crimson');
  line(0, 0, mv.x, mv.y);

  mv.sub(cv);
  translate(cv.x, cv.y);
  stroke('white');
  line(0, 0, mv.x, mv.y);
}
