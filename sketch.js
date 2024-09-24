function star(x, y, p, a) {
  line(x - a, y - a, x, y - p);
  line(x, y - p, x + a, y - a);
  line(x + a, y - a, x + p, y);
  line(x + p, y, x + a, y + a);
  line(x + a, y + a, x, y + p);
  line(x, y + p, x - a, y + a);
  line(x - a, y + a, x - p, y);
  line(x - p, y, x - a, y - a);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(220, 20, 20);

  //drawing a row of stars
  // for (let x = 50; x < width; x += 75) {
  // star(x, 50, 50, 5);
  // }

  // drawing a column of stars
  // for (let y = 50; y < width; y += 75) {
  // star(50, y, 50, 5);
  // }

  // drawing multiple rows of rows
  for (let y = 50; y < height; y += 60) {
    //drawing a row of stars
    for (let x = 50; x < width; x += 60) {
      star(x, y, 50, 5); //the y had to be changed bc the y is changing!
    }
  }

  push();
  strokeWeight(4);
  translate(200, 200);
  line(-5, -5, 0, -50);
  line(0, -50, 5, -5);
  line(-50, 0, -5, -5);
  line(-50, 0, -5, 5);
  line(-5, 5, 0, 50);
  line(0, 50, 5, 5);
  line(5, 5, 50, 0);
  line(50, 0, 5, -5);
  pop();

  strokeWeight(2);
  star(500, 500, 50, 5);

  // push();
  // noFill();
  // translate(500, 300);
  // ellipse(0, 0, 40);
  // ellipse(0, 0, 60);
  // ellipse(0, 0, 80);
  // pop();

  push();
  noFill();
  strokeWeight(1);
  translate(600, 300);
  for (let d = 10; d < 400; d += 5) {
    ellipse(0, 0, d);
  }

  translate(150, 50);
  for (let d = 10; d < 400; d += 7) {
    ellipse(0, 0, d);
  }

  for (let cnt = 0; cnt < 20; cnt++) {
    print(cnt);
    ellipse(0, 0, 20 * cnt);
  }
}

function draw() {}
