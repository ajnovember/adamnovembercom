var cnv;
var side;
var myBox;
var counter;
var a,b,c,d;
var colors;
var measure;



function setup(){
	cnv = createCanvas(windowWidth,windowHeight);
	cnv.id("mycanvas");
	//background(220,170,250);
	rectMode(CENTER);
	noStroke();
	side = width/7;
	counter = 0;
	a = color(0,0,0);  
	b = color(60,60,60);  
	c = color(130,130,130);  
	d = color(250,250,250); 
	colors = [a,b,c,d]; 

	if(width>height){
		measure = width;
	}
	if(height/width){
		measure = height;
	}


	setInterval(function(){counter++},200);
	cnv.style("width:100%");
}

function draw() {
	background(120,195,210);
	for(var i = 0; i < measure/side;i++){
		for(var j = 0; j < measure/side;j++){
		
			
			Boxer(i*side+random(-.5,.5)+side/2,j*side+random(-.5,.5)+side/2);

		}
	}
	
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function Boxer(x,y){


	for(var i = 0; i < 4; i++){
		fill(colors[(counter + i)%4]);
		rect(x,y,.5*side*(4-i)/4,.5*side*(4-i)/4);
	}
	
	
}
