let randomCounts = []
let total = 255;

function setup() {
   // put setup code here
   createCanvas(windowWidth, windowHeight);
   for (let i = 0; i < total; i++){
      randomCounts[i]= 0;
   }
}

function draw() {
   // put drawing code here
   background(255);
   let index = floor(random(randomCounts.length));
   randomCounts[index]+=20;
   
   stroke(0);
   fill(127);
   let w = width/randomCounts.length;
   
   for (let x = 0; x < randomCounts.length; x++){
      rect(x*w, height - randomCounts[x], w-1, randomCounts[x]);
   }
}

/*
Notes:
1. If all the arrays have values > 0, shift the position of the rectangles by the amount that the its height accumulated (like tetris)
2. Change the color while accumulating height
*/