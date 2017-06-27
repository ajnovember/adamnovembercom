var cnv;
var limit;
var running;

var lineLength,started,currentAngle;

function setup(){
	frameRate(9);
	cnv =createCanvas(windowWidth, windowHeight);

	stroke(255);
	angleMode(DEGREES);
	currentAngle = 0;
	lineLength = 100;
	started = false;
	strokeWeight(.8);
	colorMode(HSB, 100);
	v = 0;
	background(255);
	running = true;
	window.setInterval(animate,90);
}

function animate(){
	lineLength = random(200);

	stroke(v, 100, random(100));
	v++;
	if(v == 100) {v = 0;}
	drawLines(random(width), random(height), random(width), height/2 - lineLength,3012);



//drawLines(width/2 + lineLength, height/2, width/2 +lineLength, height/2 - lineLength);
//drawLines(width/2 - lineLength, height/2, width/2 -lineLength, height/2 - lineLength);


	
}

function drawLines(x1,y1,x2,y2,count){
	count--;
	//console.log(count);
	line(x1,y1,x2,y2);
	currentAngle+=random(.1,100);
	//currentAngle = currentAngle%360;
	var lastx = x2;
	var lasty = y2;
	var newx = lastx - lineLength * cos(currentAngle);
	var newy = lasty - lineLength * sin(currentAngle);
	if(count>0){drawLines(lastx, lasty, newx, newy,count);}
}


