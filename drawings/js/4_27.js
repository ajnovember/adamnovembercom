var cnv;
var theta,x,y;

function setup(){
	cnv = createCanvas(windowWidth,windowHeight);
	//cnv.style("width:100%");
	x=0;
	y=0;
	theta=2;
	noStroke();
	rectMode(CENTER);
}

function draw(){
	translate(width/2,height/2.1);
	//rotate(-theta/100);
	x = (sin(theta)*(width)/1.3);
	y = 0;
	fill(0);
	for(var i = 0; i < height/4; i++){
			
		fill(100-i*2,i);
		ellipse(i%2==0?x:x, -height/2+(i*height/100),random(round(width/10)),random(round(width/10)));
	}

	fill((0),150+100*sin(theta),150+100*sin(theta), 1);
	rect(0,theta,width*2,height*2);
	theta+=.01;
	if(theta> (240))theta=2;
	

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}