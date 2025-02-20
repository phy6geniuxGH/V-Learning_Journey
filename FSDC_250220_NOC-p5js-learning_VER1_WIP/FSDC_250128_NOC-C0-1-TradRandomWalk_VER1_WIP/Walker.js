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
      let xstep = this.stepsize*(random(-1,1));
      let ystep = this.stepsize*(random(-1,1));
      this.x += xstep;
      this.y += ystep;
   }
}