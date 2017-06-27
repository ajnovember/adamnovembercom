
var cnv;
var theta;
//var[] nums = {1,6,3,2,3,4};
function setup(){
  //size(800,800);
  cnv = createCanvas(windowWidth,windowHeight);
  theta = 0;
  stroke(10,200);
  rectMode(CENTER);
}

function draw(){
 //var z = nums[round(theta-.2)%6];
  background(255,200);
  for(var i = 0; i < 100; i++){
    
    var x = width/2 + sin((i)*theta)*width/3;
    var y = height*(i)*.009+30;
    fill(0,(y/2),250);
    noStroke();
    rect(x,y, width/30,width/30);
    fill(0);
   // ellipse(x,y, 3,3);
    for(var j = 1; j < 3; j++){
    if(i-j>-1){
      stroke(0);
      line( x,y,width/2 + sin((i-j)*theta)*width/3,height*(i-j)*.009+30);
    }
    }
  }
 theta+=(width/350000);
 //text(theta, 20,20);
}


function branch( x, y){
  var w = 50;
  for(var i = 0; i < 100; i++){
    ellipse(x,y+i,w,w);
    w-=.5;
  }
}