var mySound, fft, amp,cnv;
var b1,b2,b3,b4; 

var c;

function preload() {
  mySound = loadSound('music/flim.mp3');
  
}

function setup() {
  mySound.setVolume(0.8);
  cnv = createCanvas(707,707);
  mySound.play();
  background(255);
  c=0;
  //window.setInterval(300); 
  amp = new p5.Amplitude();
  fft=new p5.FFT();
  b1 = document.getElementById('b1');
  b2 = document.getElementById('b2');
  b3 = document.getElementById('b3');
  b4 = document.getElementById('b4');
  d1 = document.getElementById('d1');
  d2 = document.getElementById('d2');
  d3 = document.getElementById('d3');




//  bars = [b1,b2,b3,b4];
 dots = [d1,d2,d3];
}

function draw(){
	var spectrum = fft.analyze();
	
	background(255);

	fill(245,248,249);
	//fill(247,78,66);
	noStroke();
    ellipse(width/2-10,height/2-7,646,643);
	b1.style.top = 302-fft.getEnergy('bass')/2;
	b2.style.top = 329-fft.getEnergy('lowMid')/2;
	b3.style.top = 282-fft.getEnergy('mid')/2;
	b4.style.top = 260-fft.getEnergy('treble')+fft.getEnergy('highMid')/4;

	d3.style.transform = 'scale('+(.7+fft.getEnergy('bass')/355)+')';
	d2.style.transform = 'scale('+(1+fft.getEnergy('mid')/255)+')';
	d1.style.transform = 'scale('+(1+fft.getEnergy('treble')/255)+')';
	var waveform = fft.waveform();
 	noFill();
  	beginShape();
  		stroke(247,78,66); // waveform is red
  		//stroke(245,248,249);
  		strokeWeight(5);
 		 for (var i = 0; i< waveform.length; i++){
  		 var x = map(i, 0, waveform.length, 0, width-30);
   		 var y = map( waveform[i], -1, 1, height/4+10, 3*height/4-10);
  		 vertex(x,y);
  		}
  	endShape();
  	fill(0,0);
  	strokeWeight(amp.getLevel()*100);
	stroke(53,55,50);
    ellipse(width/2-10,height/2-7,646,643);
}


function mousePressed(){
	if((mySound).isPlaying()){
			mySound.pause();
			noLoop();
	}
	else{
		mySound.play();
		loop();
	}
}








