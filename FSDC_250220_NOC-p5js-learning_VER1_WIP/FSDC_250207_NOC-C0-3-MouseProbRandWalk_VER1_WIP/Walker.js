class Walker {
   
   constructor() {
      this.x = width/2;
      this.y = height/2;
      this.stepsize = 1
      this.strokeR,this.strokeG,this.strokeB,this.strokeAlpha = 255,255,255,255
      this.strokeW = 1
   }
   show() {
      stroke(this.strokeR,this.strokeG,this.strokeB,this.strokeAlpha);
      strokeWeight(this.strokeW)
      point(this.x, this.y)
   }
   step(){
      let relMousePosX = mouseX-this.x;
      let relMousePosY = mouseY-this.y;
      let r1 = random(1);
      let r2 = random(1);
      if (relMousePosX+width/2 > 50){
         let prob1 = 0.9;
         let prob2 = 1 - prob1;
         
         if (r1 < prob1){
            r1 = 1;
         } else {
            r1 = 0;
         }
         if (r2 < prob2){
            r2 = 1;
         } else {
            r2= 0;
         }
      } else if (relMousePosX-width/2 < -50) {
         let prob1 = 0.1;
         let prob2 = 1 - prob1;
         
         if (r1 < prob1){
            r1 = 1;
         } else {
            r1 = 0;
         }
         if (r2 < prob2){
            r2 = 1;
         } else {
            r2= 0;
         }
      } else {
         let r1 = 1;
         let r2 = 1;
      }
      
      let xstep = this.stepsize*(random(-1*r1,1*r1));
      let ystep = this.stepsize*(random(-1*r2,1*r2));
      this.x += xstep;
      this.y += ystep;
   }
}