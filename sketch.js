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

  strokeWeight(4);
  star(500, 500, 50, 5);
}

function draw() {
  strokeWeight(4);
  star(600, 600, 50, 5);
}
