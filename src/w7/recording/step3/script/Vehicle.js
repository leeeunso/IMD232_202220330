class Vehicle {
  // 탈것 이라는 의미
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    //움직임을 표현하는 방식
    this.pos = createVector(x, y);
    //위치
    this.vel = p5.Vector.random2D();
    //위치를 매 프레임마다 얼마나 이동할 것인지의 값
    this.acc = createVector();
    //매번 속도가 얼마나 변하는지의 값
    this.mass = mass;
    //질량
    this.rad = rad;
    //반지름
    this.speedMx = speedMx;
    //speedMx값의 초기화
    this.forceMx = forceMx;
    //forceMx값의 초기화
    this.neighborhooodRad = 50;
    //neighborhooodRad의 초기화, 이웃 판단의 반경기준
    this.color = color;
    //각각 고유한 색깔을 넣을거라는 변수
  }

  cohesion(others) {
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.pos);
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt);
      steer.sub(this.pos);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  align(others) {
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.vel);
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  separate(others) {
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const dist = this.pos.dist(each.pos);
        if (dist > 0 && this.rad + each.rad > dist) {
          const distNormal = dist / (this.rad + each.rad);
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          towardMeVec.setMag(1 / distNormal);
          steer.add(towardMeVec);
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    //force를 mass로 나누고 변환된 값만 (사본)
    this.acc.add(forceDivedByMass);
    //외부의 힘을 나의 가속도에 적용
  }

  update() {
    //어떤 객체나 상태를 업데이트하거나 변형
    this.vel.add(this.acc);
    //속도에다 가속도를 더한다
    this.vel.limit(this.speedMx);

    this.pos.add(this.vel);
    //위치에다 속도를 더한다
    this.acc.mult(0);
    //가속도는 매 프레임마다 0에서 시작해서 위의 것들이 더해져서 값이 만들어지기 때문에 항상 초기화를 시킴
  }

  borderInfinite() {
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset;
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset;
    }
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
    }
  }

  display() {
    push();
    //현재의 드로잉 스타일 설정과 변형을 저장
    translate(this.pos.x, this.pos.y);
    //좌표계를 원의 중심점으로 이동한다.
    rotate(this.vel.heading());
    //자신의 vel 값으로 회전한다.
    noStroke();
    //선 없음
    fill(this.color);
    //각각 고유한 색깔을 지정
    beginShape();
    // vertex로 좌표값을 입력하여 화살표를 그림
    vertex(this.rad, 0);
    //꼭짓점 좌표를 지정
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    //60도법 각도를 넣어주면 radians 각도로 바꿔줌
    vertex(0, 0);
    //꼭짓점 좌표를 지정
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    //60도법 각도를 넣어주면 radians 각도로 바꿔줌
    endShape(CLOSE);
    //vertex로 좌표값을 입력하여 화살표를 그림

    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);

    pop();
    //설정들을 복구 (초기화)
  }
}
