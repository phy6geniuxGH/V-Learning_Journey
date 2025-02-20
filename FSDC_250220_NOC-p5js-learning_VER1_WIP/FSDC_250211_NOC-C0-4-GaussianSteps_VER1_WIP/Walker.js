class Walker { 
   constructor() {
      this.x = width/2;
      this.y = height/2;
      this.stepsize_x = 1
      this.stepsize_y = 1
      this.strokeR,this.strokeG,this.strokeB,this.strokeAlpha = 255,255,255,255
      this.strokeW = 1
   }
   show() {
      stroke(this.strokeR,this.strokeG,this.strokeB,this.strokeAlpha);
      strokeWeight(this.strokeW)
      point(this.x, this.y)
   }
   step(){
      let stepsizeX = randomGaussian(this.stepsize_x,5);
      let stepsizeY = randomGaussian(this.stepsize_y,5);
      let prob1 = abs(randomGaussian(1,1));
      let prob2 = 1 - prob1;
      let r1 = random(1);
      let r2 = random(1);
      if (r1 < prob1){
         r1 = 1;
      }
      if (r2 < prob2){
         r2 = 1;
      }
      let xstep = stepsizeX*(random(-1*r1,1*r1));
      let ystep = stepsizeY*(random(-1*r2,1*r2));
      this.x += xstep;
      this.y += ystep;
   }
}