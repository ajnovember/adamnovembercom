 
var theta = 0;
var theta2 = 0;
var cnv;
function setup(){

  cnv = createCanvas(windowWidth,windowHeight);
  //frameRate(40);
  noStroke();
}

function draw(){
  background(255);
  theta+=.03;
  theta2-= .03;
  fill(0,200,200);
  ellipse(width/2,height/2,400,400);
  var x1 = width/2 + 65*cos(theta);
  var y1 = height/2 + 65*sin(theta);
  fill(200,0,200);
  ellipse(x1,y1,250,250);
  var x2 = x1 + 40*cos(theta2*2);
  var y2 = y1 + 40*sin(theta2*2);
  fill(200,200,0);
  ellipse(x2,y2,150,150);
  var x3 = x2 + 23*cos(theta*3);
  var y3 = y2 + 23*sin(theta*3);
  fill(15,150,100);
  ellipse(x3,y3,90,90);
  var x4 = x3 + 15*cos(theta2*4);
  var y4 = y3 + 15*sin(theta2*4);
  fill(15,15,50);
  ellipse(x4,y4,50,50);
  var x5 = x4 + 8*cos(theta*5);
  var y5 = y4 + 8*sin(theta*5);
  fill(235,235,235);
  ellipse(x5,y5,25,25);
 
}
