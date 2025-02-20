var r = 0;
var g = 0;
var b = 255;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  red_map = map(mouseX,0,width, 0, 255);
  green_map = map(mouseY,0,height, 0, 255);
  background(red_map,green_map,b);
  fill(250,118,222);
  ellipse(mouseX, mouseY, 64, 64)
}