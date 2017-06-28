var cnv;
var theta = 0;
var particles = [];
var scaleX,scaleY;
var turbulance = 2;
var size = 40;
var speed;
var entered=false;

function setup(){
    cnv = createCanvas(windowWidth, windowHeight);
    //document.getElementById('defaultCanvas0').style.width = "100%";
    //cnv.position(0,0);
    angleMode(DEGREES);
    frameRate(40);
    scaleX = width/40;
    scaleY = height/40;
    speed = scaleX ;
    console.log(scaleY);
    for(var i = 0; i<scaleX+1;i++){
        for(var j = 0; j<scaleY+2;j++){
            particles.push(new particle(i*40,j*40,i*j));
        }
    }
    noStroke();
    turbulance = 10;
    size = 5;

}

function draw(){
    turbulance = .1+ mouseY/(scaleX*2);

    size = 5+ mouseX/(scaleX/2.5);
     if(!entered){
        size=20;
        turbulance=2;
    }
    if(mouseX>0){
        entered=true;
    }
    background(255);
    theta += speed;
    for(var i = 0; i< particles.length;i++){
        particles[i].update();
    }
}


var particle = function(x,y,angle){
    this.x = x;
    this.y = y;
    this.angle = angle;
}


particle.prototype = {

    update:function(){
        fill(0,150-(this.angle/5),150+this.angle,100);
        ellipse(this.x + 10*cos(theta+this.angle*turbulance), this.y + 10*sin(theta+this.angle*turbulance), size,size);
    }
}
function windowResized() {
  clear();  
  resizeCanvas(windowWidth, windowHeight);
  particles = [];
  setup();

}
