let traffic;
//traffic 이라는 이름의 변수 생성

let infiniteOffset = 80;
//

function setup() {
  //화면 크기나 배경색 등의 초기 환경 요소를 정의, 이미지나 폰트같은 미디어 파일을 불러오는 데에 쓰임
  setCanvasContainer('canvas', 3, 2, true);
  //켄버스 3대2비율
  colorMode(HSL, 360, 100, 100, 100);
  //컬러모드를 HSL로 함
  background('white');
  //배경색 화이트
  traffic = new Traffic();
  //새로운 Traffic
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height));
  }
  //traffic에게 addVehicle을 하는데, 위치는 random(width), random(height (새로시작하면 10개는 있는 상태로 시작한다)
}

function draw() {
  // setup함수 직후에 호출된다. 프로그램 실행이 중단되거나 noLoop함수가 호출되기 전까지 블록 내에 포함된 코드들을 계속 실행한다.
  background('white');
  //배경색 화이트
  traffic.run();
}

function mouseDragged() {
  //마우스를드래그할떄
  traffic.addVehicle(mouseX, mouseY);
  //마우스의 좌표에 Vehicle 이 추가된다.
}
