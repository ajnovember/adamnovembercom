var cnv;
var theta = 0;
var cells = [];
function setup(){
	cnv = createCanvas(windowWidth, windowHeight);
	//cnv.position(0,0);
	angleMode(DEGREES);
	cnv.style("width:100%");
}

function draw(){
	translate(width/2,height/2);
	theta += 5;
	background(150,170,250);
	rotate(theta);
	strokeWeight(5);
	stroke(200);
	fill(0);
	ellipse(10*cos(theta),10*sin(theta), 20,20);
}

var Cell = function(x,y,angle){
	this.x = x;
	this.y = y;
	this.angle = angle;

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
