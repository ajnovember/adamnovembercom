/**
 * Created by Adam on 12/24/15.
 */
var c;
var drops = [];
var running = false;
var ctr;
var randX;
var randY;
function setup(){
    c = createCanvas(windowWidth, windowHeight);
    //c.style("width:100%");  
    frameRate(25);
    strokeWeight(3);
    ctr = 0;
    //console.log(ctr);
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
    ctr++;
   // console.log(ctr);
  
    if(ctr>60){
       if(ctr==61){
        randX = random(width);
        randY = random(height);
        }
        
        drops.push( new Drop(randX, randY));
        drops.push( new Drop(randX, -randY));
        drops.push( new Drop(-randX, randY));
        drops.push( new Drop(2*width -randX, randY ));
        drops.push( new Drop(randX++, 2*height-randY--));

    }
    if(ctr>63){
        ctr=0;
    }
    for(var i = 0;i < drops.length; i++){
        if(drops[i].rad < 600){
            //console.log(drops[i]);
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



