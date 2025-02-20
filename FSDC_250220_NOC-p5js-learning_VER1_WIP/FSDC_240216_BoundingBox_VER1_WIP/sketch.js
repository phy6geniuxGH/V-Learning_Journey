var xpos, ypos, xsize, ysize;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  xpos = width/2;
  ypos = height/2;
  xsize = 100;
  ysize = 100;
  
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  if (mouseX > width/2 - xsize/2 && mouseX < width/2 + xsize/2 && mouseY > height/2 - ysize/2 && mouseY < height/2 + ysize/2){
    fill(255,0,200);
  }
  rect(xpos-xsize/2,ypos - ysize/2,xsize,ysize);
}