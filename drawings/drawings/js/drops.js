/**
 * Created by Adam on 12/24/15.
 */
var c;
var drops = [];
var running = false;

function setup(){
    c = createCanvas(windowWidth, windowHeight);
  
    frameRate(25);
    strokeWeight(3);
}

function draw(){
    background(50,150,250);
    if(mouseIsPressed){
        drops.push( new Drop(mouseX, mouseY));
        drops.push( new Drop(mouseX, -mouseY));
        drops.push( new Drop(-mouseX, mouseY));
        drops.push( new Drop(2*width -mouseX, mouseY ));
        drops.push( new Drop(mouseX, 2*height-mouseY));
    }
    for(var i = 0;i < drops.length; i++){
        if(drops[i].rad < 600){
            console.log(drops[i]);
            drops[i].update();
        }
        else(drops.splice(i,i));
    }

}

var Drop = function(x,y){
    this.x = x;
    this.y = y;
    this.rad = 1;
}

Drop.prototype= {
    update:function(){
        fill(255,0);
        stroke(0,220,255, 300 - (this.rad /2));
        ellipse(this.x,this.y,this.rad,this.rad);

        this.rad += 20;
    },


}



