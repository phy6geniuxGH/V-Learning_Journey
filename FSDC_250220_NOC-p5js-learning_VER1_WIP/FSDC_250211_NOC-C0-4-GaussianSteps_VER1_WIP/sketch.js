let walkers = [];
let walker_count = 10;

function setup() {
    
   // put setup code here
  	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < walker_count; i++){
		walkers[i] = new Walker();
	}
 	
	background(0);
}

function draw() {
   // put drawing code here
	for (let walker of walkers){
        walker.stepsize_x = random(0,20);
        walker.stepsize_y = random(0,20);
        walker.strokeR = 0;
		walker.strokeG = random(255);
		walker.strokeB = random(255);
		walker.strokeAlpha = random(255);
		walker.strokeW = random(1,10);
		walker.stepsize = random(1, 50);
  		walker.step();
		walker.show();
	}
}

/*
Notes:
1. Clean up this code
2. Add basic explanation
3. Add more functionalities 
*/
