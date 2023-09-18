function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(248, 217, 178);

  //   루프로 인해 아래서 적용한 설정이 타고 넘어오는 것을 방지하기 위해 초기화
  rectMode(CORNER);
  fill(255);
  colorMode(RGB);
  stroke(0);

  strokeWeight(0);
  //바닥
  fill(65, 127, 100);
  rect(0, 470, 1000, 700);
  fill('#84624c');
  rect(0, 450, 1000, 20);

  //등
  fill(174, 57, 58);
  rect(450, 240, 295, 300, 50);

  //러그
  fill('#ba9b65');
  ellipse(480, 560, 850, 120);
  fill(248, 217, 178);
  ellipse(480, 550, 850, 100);
  //앉는곳
  fill(202, 67, 75);
  rect(450, 400, 300, 150, 50);

  //팔걸이
  fill(179, 44, 60);
  rect(735, 350, 100, 200, 40);

  //쿠션
  fill(75, 107, 100);
  rect(460, 320, 100, 100, 30);

  fill(75, 90, 90);
  ellipse(510, 370, 20, 20);

  fill(75, 107, 100);
  rect(460, 320, 100, 100, 30);

  fill(75, 90, 90);
  ellipse(510, 370, 20, 20);

  //장식
  fill(138, 162, 40);
  ellipse(50, 20, 200, 200);
  fill(248, 217, 178);
  ellipse(50, 10, 150, 150);

  fill(65, 127, 100);
  ellipse(235, 20, 200, 200);
  fill(248, 217, 178);
  ellipse(235, 10, 150, 150);

  fill(138, 162, 40);
  ellipse(430, 20, 200, 200);
  fill(248, 217, 178);
  ellipse(430, 10, 150, 150);

  fill(65, 127, 100);
  ellipse(625, 20, 200, 200);
  fill(248, 217, 178);
  ellipse(625, 10, 150, 150);

  fill(138, 162, 40);
  ellipse(820, 20, 200, 200);
  fill(248, 217, 178);
  ellipse(820, 10, 150, 150);

  fill(65, 127, 100);
  ellipse(1010, 20, 200, 200);
  fill(248, 217, 178);
  ellipse(1010, 10, 150, 150);

  fill(179, 44, 60);
  ellipse(141, 18, 52, 52);

  fill(179, 44, 60);
  ellipse(333, 14, 52, 52);

  fill(179, 44, 60);
  ellipse(528, 14, 52, 52);

  fill(179, 44, 60);
  ellipse(722, 14, 52, 52);

  fill(179, 44, 60);
  ellipse(916, 14, 52, 52);

  //창문

  fill('#84624c');
  rect(10, 125, 300, 250);
  fill('#8ea2ce');
  rect(35, 150, 250, 200);

  //눈
  fill('fffffff');
  ellipse(50, 165, 15, 15);
  fill('fffffff');
  ellipse(120, 285, 15, 15);
  fill('fffffff');
  ellipse(120, 205, 15, 15);
  fill('fffffff');
  ellipse(200, 170, 15, 15);
  fill('fffffff');
  ellipse(250, 270, 15, 15);
  fill('fffffff');
  ellipse(80, 330, 15, 15);
  fill('fffffff');
  ellipse(220, 305, 15, 15);
  fill('fffffff');
  ellipse(250, 195, 15, 15);
  fill('fffffff');
  ellipse(70, 235, 15, 15);
  //창틀
  fill('#84624c');
  rect(145, 150, 30, 200);
  fill('#84624c');
  rect(20, 240, 280, 30);
  //조명

  fill('#3f130a');
  rect(400, 150, 25, 250, 30);

  fill('#3f130a');
  strokeWeight(7);
  point(330, 190);
  point(330, 200);
  point(330, 210);
  point(330, 220);
  point(330, 230);

  fill('#ffe840');
  strokeWeight(15);
  point(330, 240);

  strokeWeight(0);
  fill(200, 93, 92);
  rect(300, 100, 230, 90, 50, 50, 0, 0);

  fill('#e2a3a3');
  rect(290, 175, 250, 25, 30);
  //팔걸이
  fill(179, 44, 60);
  rect(365, 350, 100, 200, 40);

  //테이블

  fill('#59322a');

  rect(810, 390, 25, 160, 30);

  rect(750, 380, 150, 30, 40);

  rect(775, 530, 90, 20, 40);

  //와인
  fill('#000000');
  rect(820, 280, 60, 100, 30, 30, 0, 0);
  rect(837, 230, 25, 90, 5, 5);
  fill(79, 44, 60);
  rect(834, 230, 30, 15, 5, 5);
  rect(820, 310, 60, 45);

  //리스
  fill(75, 107, 100);
  ellipse(25, 365, 50, 50);
  fill(75, 107, 100);
  ellipse(60, 365, 50, 50);
  fill(75, 107, 100);
  ellipse(95, 365, 50, 50);
  fill(75, 107, 100);
  ellipse(130, 365, 50, 50);
  fill(75, 107, 100);
  ellipse(165, 365, 50, 50);
  fill(75, 107, 100);
  ellipse(200, 365, 50, 50);
  fill(75, 107, 100);
  ellipse(235, 365, 50, 50);
  fill(75, 107, 100);
  ellipse(270, 365, 50, 50);
  fill(75, 107, 100);
  ellipse(300, 365, 50, 50);
}