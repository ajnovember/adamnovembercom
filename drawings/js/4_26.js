var cnv;
var theta,x,y;

function setup(){
	cnv = createCanvas(windowWidth,windowHeight);
	//cnv.style("width:100%");
	x=0;
	y=0;
	theta=2;
	noStroke();
}

function draw(){
	translate(width/2,height/2)
	rotate(theta);
	x = (sin(theta)*width/2);
	y = 0;
	fill(0);
	for(var i = 0; i < height/5; i++){
		fill(150-i*2,i*4,220,60);
		ellipse(i%2==0?x:x, -height/2+(i*height/100),width/100,width/100);
	}

	fill(200,170,0,5);
	rect(0,0,width,height);
	theta+=.01;
	

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}