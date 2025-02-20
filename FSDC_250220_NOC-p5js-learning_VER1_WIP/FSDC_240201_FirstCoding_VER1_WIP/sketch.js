height = 500;
width = 500;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(220,0,150);
  rectMode(CENTER)
  rect(width/2, height/2, 100,100);
  circle(width/2 - 50,height/2-50, 100);
  circle(width/2 + 50,height/2-50, 100);
  line(0, 0, width,height);
}