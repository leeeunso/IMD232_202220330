class Traffic {
  //Traffic이라는 객체를 생성
  constructor() {
    //움직임을 표현하는 방식
    this.vehicles = [];
    //수많은 vehicles들을 가지고 있어야함 (array)
  }
  run() {
    //vehicles 배열에 있는 모든 vehicle에 대해 분리 힘을 계산하고 적용하여 vehicle이 서로 충돌하지 않도록 유지, vehicle이 화면에 뜨도록 함
    this.vehicles.forEach((eachVehicle) => {
      //모든 vehicles에 대해 계산하기 위해 forEach 사용
      const separate = eachVehicle.separate(this.vehicles);
      //안에 들어있는 각각의 Vehicle들이
      separate.mult(1);
      //너무 가까이 붙지 않게 함
      eachVehicle.applyForce(separate);
      //eachVehicle에 separate의 힘을 가한다.
      const align = eachVehicle.align(this.vehicles);
      //모든 vehicles들을 가진채로 align한다.
      align.mult(0.5);
      //너무 일정해지지 않게함
      eachVehicle.applyForce(align);
      //eachVehicle에게 align 만큼의 힘을 가한다.
      const cohesion = eachVehicle.cohesion(this.vehicles);
      //
      cohesion.mult(0.5);
      //
      eachVehicle.applyForce(cohesion);
      //
      eachVehicle.update();
      //어떤 객체나 상태를 업데이트하거나 변형
      eachVehicle.display();
      //화면에 어떻게 그려질지를 처리
      push();
      // 현재의 드로잉 스타일 설정과 변형을 저장
    });
  }

  addVehicle(x, y) {
    //추가될 vehicles들의 정보를 담은 함수
    // const mass = floor(random(1, 3));
    const mass = 1;
    //질량을 1로 설정
    this.vehicles.push(
      //array에게 새로 값을 집어넣어주는 기능
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
      //constructor의 Vehicle을 가져와 입력해줌
    );
  }
}
