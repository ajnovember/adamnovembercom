var x,y,z;
var cnv;

function setup(){
  cnv = createCanvas(windowWidth,windowHeight);
  background(200,230,244);
  x=0;
  y=0;
  strokeWeight(1);
  stroke(0,50);
  fill(0,200);
  z=0;
  cnv.style("width:100%");
}


function draw(){
  background(200,230,244);
  translate(width/3,2*height/5);
  push();
  rotate(x);
  x+=.024;
  line(width/5,width/5,-width/5,-width/5);
  ellipse(sin(y)*width/5,sin(y)*width/5,23,23);
  pop();
  
  push();
  rotate(y);
  y-=.023;
  line(width/10,width/10,-width/10,-width/10);
  
  ellipse(sin(z)*width/10,sin(z)*width/10,15,15);
  pop();
  
  push();
  rotate(z);
  z-=.003;
  line(width/2,width/2,-width/2,-width/2);
  ellipse(sin(x)*width/2,sin(x)*width/2,20,20);
  pop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}