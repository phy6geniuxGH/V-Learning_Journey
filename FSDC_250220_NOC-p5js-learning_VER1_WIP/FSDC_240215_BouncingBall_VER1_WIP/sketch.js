var x = 0;
var y = 0;
var speedx = 30;
var speedy = 10;
var diameter = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill(); 
  ellipse(x+diameter/2,y+diameter/2,diameter,diameter);
  
  if (x + diameter >= width || x < 0){
    speedx = -1*speedx
  }
  x = x + speedx
  
  if (y + diameter >= height || y < 0){
    speedy = -1*speedy
  }
  y = y + speedy
}