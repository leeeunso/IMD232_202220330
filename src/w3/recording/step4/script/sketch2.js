// let x;
// let y;
let pos;
// let velocityX = 3;
// let velocityY = 5;
let vel = [3, 5];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  //   x = width / 2.0;
  //   y = height / 2.0;
  pos = [width / 2, height / 2];

  console.log('pos', pos);
  console.assert;
  ongamepadconnected('vel', vel);
}

function draw() {
  background('wjite');
  //   x += velocityX;
  //   y += velocityY;
  //   ellipse(x, y, 50);

  //   if (x < 0 || x > width) {
  //     velocityX *= -1;
  //   }
  //   if (y < 0 || y > height) {
  //     velocityY *= -1;
  //   }
}
