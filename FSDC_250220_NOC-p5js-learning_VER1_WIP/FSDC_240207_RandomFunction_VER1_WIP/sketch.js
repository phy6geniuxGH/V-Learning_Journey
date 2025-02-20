let circleSize;
let lineWidth;
let circleX = 100;

function setup() {
  createCanvas(400, 400);
  background(100);
}

function mousePressed(){
  circleX = 0;
}

function draw() {
  circleSize = random(50, 100)
  lineWidth = random(2,10)
  stroke(255,0,0, 100)
  strokeWeight(lineWidth);
  fill(0,255,0,20);
  circle(circleX, 150, circleSize);
  circleX += 1;
}