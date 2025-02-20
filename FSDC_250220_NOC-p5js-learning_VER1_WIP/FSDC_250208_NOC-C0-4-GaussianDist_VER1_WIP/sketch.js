function setup() {
  createCanvas(600, 600);
  background(225);
}

function draw() {
  let x = randomGaussian(320, 60)
  let y = randomGaussian(320, 60)
  noStroke();
  fill(0,10);
  circle(x,y, 100, 16);
}