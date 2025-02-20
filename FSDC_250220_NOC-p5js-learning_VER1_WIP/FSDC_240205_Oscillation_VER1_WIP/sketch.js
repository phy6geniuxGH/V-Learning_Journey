var angle = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  var x = map(cos(angle), -1,1,0, width);
  var y = map(sin(angle), -1,1,0, height);
  fill(255,0,0);
  rect(y,x, 30,30);
  stroke(255,255,0);
  line(200,200,y,x);
  stroke(0,255,0);
  strokeWeight(1.2)
  line(200,200,x,y);
  fill(0,0,255);
  ellipse(x,y,20,20);
  
  angle += 0.02;
}