var cnv;

var r,g,b,a;
var running;




function setup() {

cnv =createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
 cnv.mousePressed(pause);
 
 running = true;
   r = random(255);
    g = random(255);
     b = random(255);
     a = 170;
  inc = true;

}

function draw() {

 r = random(255);
    g = random(255);
     b = random(255);
     a = random(150, 255);
	  
	 
	fill(r,g,b,a);
	var size = random (12, 32);
	rect(random(-10,width), random(-10,height),size, size);
	rect(random(-10,width), random(-10,height),size, size);
	rect(random(-10,width), random(-10,height),size, size);
	


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


  
  
  
  