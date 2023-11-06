class Traffic {
  //Traffic이라는 객체를 생성
  constructor() {
    //움직임을 표현하는 방식
    this.vehicles = [];
    //수많은 vehicles들을 가지고 있어라 (array)
  }
  run() {
    this.vehicles.forEach((eachVehicle) => {
      const separate = eachVehicle.separate(this.vehicles);
      separate.mult(1);
      eachVehicle.applyForce(separate);
      const align = eachVehicle.align(this.vehicles);
      align.mult(0.5);
      eachVehicle.applyForce(align);
      const cohesion = eachVehicle.cohesion(this.vehicles);
      cohesion.mult(0.5);
      eachVehicle.applyForce(cohesion);
      eachVehicle.update();
      eachVehicle.borderInfinite();
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    //추가될 vehicles들의 정보를 담은 함수
    const mass = 1;

    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    );
  }
}
