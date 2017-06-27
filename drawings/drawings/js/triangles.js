var cnv;

var running;

var x = [-700,-680,-620];
var y = [0,20,80];
var a;
var count;
var timer=0;



function setup() {

	cnv =createCanvas(windowWidth, windowHeight);
	//cnv.position(0,0);


	 cnv.mousePressed(pause);
 
 	running = true;
 	
 	a = 0;
 	count = 0;
 	triangle(x[0],y[0],x[1],y[1],x[2],y[2]);
	triangle(x[0],y[0]*2,x[1],y[1]*2,x[2],y[2]*2);
 	frameRate(5);
 	noStroke();

	background(random(100,200), random(100,200), random(150,250),150);
  
 
}

function draw() {
	timer++;
	console.log(timer);
	if(timer>120){
		timer = 0;
		background(255);
		background(random(100,200), random(100,200), random(150,250),150);
	}

	for(var i = 0; i < 30; i++){
		fill(random(0,255));
				triangle(x[0],y[0],x[1],y[1],x[2],y[2]);
		count++;
		if(count===3)count = 0;

		x[count] += random(90,80);
		y[count] += random(100,120);
	}
	

	 y = [0,20,80];
	 for (var i = 0; i < x.length; i++) {
	 	x[i] -=700;
	 }
	if(x[0]>width){
	 	 x = [-900,-980,-940];




	 }

}
  

  
function pause(){
	if(running == true){
		running = false;
		noLoop();
		}
		else{
			running = true;
			loop();
		}
}



  
  
  