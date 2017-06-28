var cnv;
var theta;
var change;
var b;


function setup(){

	cnv = createCanvas(windowWidth,windowHeight);
	change = 1
	theta=0;
	rectMode(CENTER);
	fill(0);
	b=0;
	strokeWeight(1);
	//cnv.style("width:100%");
	background(0);
	frameRate(10);
}

function draw(){
	//rotate(theta/10);
	stroke(0,(b+=change)/2,b+=change,30);
	stroke(200,(b+=change)/2,100,40);
	//background(150,200,250);
	translate(width/2,height/2);
	rotate(theta);
	line(-width/6,0,width/6,0);
	line(0,width/4,0,-width/4);
	//ellipse(0,0,10,10);
	branch(width/4,0);
	branch(-width/4,0);
	branch(0,width/4);
	branch(0,-width/4);
	//translate
	theta+=3;
	
	if(b>255){change=-change;}
	if(b<0){change=-change;}
	//if(theta>1)noLoop();
	background(0,6);
	
}

function branch(x,y){
	if((x>width/50)||(x<-width/50)||(y>width/50)||(y<-width/50)){
		push();
		translate(x,y);
		rotate(theta);
		line(-x/(3/2),y/((3/2)),x/(3/2),-y/((3/2)));
		//ellipse(0,0,2,2);
		branch(x/(3/2),y/((3/2)));
		branch(-x/(3/2),-y/(3/2));
		pop();
	}

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}