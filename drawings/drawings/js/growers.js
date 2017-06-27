/**
 * Created by Adam on 12/24/15.
 */
var c;
var growers = [];



function setup(){
    c = createCanvas(windowWidth, windowHeight);
   background(100,180,240,100);
   // frameRate(24);
    strokeWeight(.5);
    noStroke();


    for(var i = 0; i < 5; i++){
        growers[i] = new Grower();
    }
}

function draw() {
    for (var i = 0; i < growers.length; i++) {
        if(!growers[i].full) {
            growers[i].update();
        }

    }
    if(growers.length>50){
        growers.splice(0,20);
    }
}
var Grower = function() {
    this.x = random(width);
    this.y = random(height, height+500);
    this.active = true;
    this.full   = false;
    this.rgb = [random(100,130),random(60,100),random(150,200)];
    this.w = 2;
    this.speed = random(2,6);
    this.cap = random(20,70);

}

Grower.prototype= {
    update:function(){
        var h = height-this.y;

        fill(this.rgb[0],this.rgb[1],this.rgb[2]);
        triangle(this.x,this.y,this.x- (h/this.w),height,this.x + (h/this.w), height);
        fill(255,200);
        triangle(this.x,this.y,this.x- this.cap/2, this.y + this.cap,this.x +this.cap/2, this.y+this.cap);
        this.y-=this.speed;

        if(this.y< height/2){
            if(this.active){growers.push(new Grower());}
            this.active = false;
        }
        if(this.y<-height*4){
            this.full = true;
        }

    }


}

function mousePressed(){
    growers = [];
    for(var i = 0; i < 10; i++){
        growers[i] = new Grower();
    }
    background(255);

}



