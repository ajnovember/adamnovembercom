var blocks = function( p ) {
        var cnv;

        var r,g,b,a;
        var running;




        p.setup=function() {
        var w = 1+ document.getElementById('blocks').clientWidth;  
        var h = document.getElementById('blocks').clientHeight;  
        cnv =p.createCanvas(w,h);
        cnv.parent('blocks');
      
        
          p.background(255);
          p.noStroke();

         //cnv.mousePressed(pause);
         //cnv.style("width:100%");
         
         running = true;
           r = p.random(255);
            g = p.random(255);
             b = p.random(255);
             a = 170;
          inc = true;
          p.frameRate(10);

        }

        p.draw=function() {

         r = p.random(255);
            g = p.random(255);
             b = p.random(255);
             a = p.random(150, 255);
            
           
          p.fill(r,g,b,a);
          var size = p.random(2, 8);
          p.rect(p.random(-10,p.width), p.random(-10,p.height),size, size);
          
          


        }
          
          
        p.pause=function(){
          if(running == true){
            running = false;
            p.noLoop();
            }
            else{
              running = true;
              p.loop();
            }
        }
        p.windowResized=function() {
          var w = 1+ document.getElementById('blocks').clientWidth;  
        var h = document.getElementById('blocks').clientHeight;  
        cnv =p.createCanvas(w,h);
        }
};
var myp5 = new p5(blocks, 'blocks');

var waves = function(p){
          var cnv;
          var theta = 0;
          var particles = [];
          var scaleX,scaleY;
          var turbulance = 2;
          var size = 40;
          var speed;
          var entered=false;

          p.setup=function(){
              var w = 1+ document.getElementById('waves').clientWidth;  
              var h = document.getElementById('waves').clientHeight;  
              cnv =p.createCanvas(w,h);
              //document.getElementById('defaultCanvas0').style.width = "100%";
              //cnv.position(0,0);
              p.angleMode(p.DEGREES);
              p.frameRate(40);
              scaleX = p.width/40;
              scaleY = p.height/40;
              speed = scaleX ;
              console.log(scaleY);
              for(var i = 0; i<scaleX+1;i++){
                  for(var j = 0; j<scaleY+2;j++){
                      particles.push(new particle(i*40,j*40,i*j));
                  }
              }
              p.noStroke();
              turbulance = 10;
              size = 5;

          }

          p.draw=function(){
              turbulance = .1+ p.mouseY/(scaleX*2);

              size = 5+ p.mouseX/(scaleX/2.5);
               if(!entered){
                  size=20;
                  turbulance=2;
              }
              if(p.mouseX>0){
                  entered=true;
              }
              p.background(255);
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
                  p.fill(0,150-(this.angle/5),150+this.angle,100);
                  p.ellipse(this.x + 10*p.cos(theta+this.angle*turbulance), this.y + 10*p.sin(theta+this.angle*turbulance), size,size);
              }
          }
          p.windowResized=function() {
            p.clear();  
            var w = 1+ document.getElementById('waves').clientWidth;  
            var h = document.getElementById('waves').clientHeight;  
            cnv =p.createCanvas(w,h);
            particles = [];
            p.setup();

          }
};
var myp5 = new p5(waves, 'waves');

var helix= function(p){

              var cnv;
              var theta;
              //var[] nums = {1,6,3,2,3,4};
              p.setup=function(){
                //size(800,800);
                var w = 1+ document.getElementById('helix').clientWidth;  
                var h = document.getElementById('helix').clientHeight;  
                cnv =p.createCanvas(w,h);
                //cnv.style("width:100%");
                theta = 0;
                p.stroke(10,200);
                p.rectMode(p.CENTER);
                p.frameRate(30);
              }

              p.draw=function(){
               //var z = nums[round(theta-.2)%6];
                p.background(245,150,180);
                for(var i = 0; i < 100; i++){
                  
                  var x = p.width/2 + p.sin((i)*theta)*p.width/4;
                  var y = p.height*(i)*.009+20;
                  p.fill(0,(y/2),250);
                  p.noStroke();
                  p.rect(x,y, 10,10);
                  p.fill(0);
                 // ellipse(x,y, 3,3);
                  for(var j = 1; j < 3; j++){
                  if(i-j>-1){
                    p.stroke(0);
                    p.line( x,y,p.width/2 + p.sin((i-j)*theta)*p.width/4,p.height*(i-j)*.009+20);
                  }
                  }
                }
               theta+=(1000/350000);
               //text(theta, 20,20);
              }
              p.windowResized=function() {
                 var w = 1+ document.getElementById('helix').clientWidth;  
                var h = document.getElementById('helix').clientHeight;  
                cnv =p.createCanvas(w,h);
              }

              p.branch=function( x, y){
                var w = 1+ 50;
                for(var i = 0; i < 100; i++){
                  p.ellipse(x,y+i,w,w);
                  w-=.5;
                }
              }
};
var myp5 = new p5(helix, 'helix');

var drops = function(p){
  /**
 * Created by Adam on 12/24/15.
 */
      var c;
      var drops = [];
      var running = false;
      var ctr;
      var randX;
      var randY;
      p.setup= function(){
          var w = 1+ document.getElementById('drops').clientWidth;  
          var h = document.getElementById('drops').clientHeight;  
          c =p.createCanvas(w,h);
          //c.style("width:100%");  
          p.frameRate(25);
          p.strokeWeight(3);
          ctr = 0;
          //console.log(ctr);
      }

      p.draw=function(){
          p.background(50,150,250);
          if(p.mouseIsPressed){
              drops.push( new Drop(p.mouseX, p.mouseY));
              drops.push( new Drop(p.mouseX, -p.mouseY));
              drops.push( new Drop(-p.mouseX, p.mouseY));
              drops.push( new Drop(2*p.width -p.mouseX, p.mouseY ));
              drops.push( new Drop(p.mouseX, 2*p.height-p.mouseY));

          }
          ctr++;
         // console.log(ctr);
        
          if(ctr>60){
             if(ctr==61){
              randX = p.random(p.width);
              randY = p.random(p.height);
              }
              
              drops.push( new Drop(randX, randY));
              drops.push( new Drop(randX, -randY));
              drops.push( new Drop(-randX, randY));
              drops.push( new Drop(2*p.width -randX, randY ));
              drops.push( new Drop(randX++, 2*p.height-randY--));

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
              p.fill(255,0);
              p.stroke(0,220,255, 300 - (this.rad /2));
              p.ellipse(this.x,this.y,this.rad,this.rad);

              this.rad += 20;
          },


      }

      p.windowResized=function() {
          var w = 1+ document.getElementById('drops').clientWidth;  
          var h = document.getElementById('drops').clientHeight;  
          p.resizeCanvas(w,h);
      }
};
var myp5= new p5(drops,'drops');


var growers = function(p){
  /**
 * Created by Adam on 12/24/15.
 */
        var c;
        var growers = [];



        p.setup=function(){
            var w = 1+ document.getElementById('growers').clientWidth;  
            var h = document.getElementById('growers').clientHeight;  
            c =p.createCanvas(w,h);

           p.background(100,180,240,100);
           // frameRate(24);
            p.strokeWeight(.5);
            p.noStroke();
            //c.style("width:100%");


            for(var i = 0; i < 5; i++){
                growers[i] = new Grower();
            }
        }
        p.windowResized=function() {
          var w = 1+ document.getElementById('growers').clientWidth;  
          var h = document.getElementById('growers').clientHeight;  

          p.resizeCanvas(w,h);
        }

        p.draw=function() {
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
            this.x = p.random(p.width);
            this.y = p.random(p.height, p.height+500);
            this.active = true;
            this.full   = false;
            this.rgb = [p.random(100,130),p.random(60,100),p.random(150,200)];
            this.w = 2;
            this.speed = p.random(2,6);
            this.cap = p.random(20,70);

        }

        Grower.prototype= {
            update:function(){
                var h = p.height-this.y;

                p.fill(this.rgb[0],this.rgb[1],this.rgb[2]);
                p.triangle(this.x,this.y,this.x- (h/this.w),p.height,this.x + (h/this.w), p.height);
                p.fill(255,200);
                p.triangle(this.x,this.y,this.x- this.cap/2, this.y + this.cap,this.x +this.cap/2, this.y+this.cap);
                this.y-=this.speed;

                if(this.y< p.height/2){
                    if(this.active){growers.push(new Grower());}
                    this.active = false;
                }
                if(this.y<-p.height*4){
                    this.full = true;
                }

            }


        }

        p.mousePressed=function(){
            growers = [];
            for(var i = 0; i < 10; i++){
                growers[i] = new Grower();
            }
            p.background(255);

        }
};
var myp5= new p5(growers,'growers');


var fts = function(p){
      var cnv;
      var theta,x,y;

      p.setup=function(){
          var w = 1+ document.getElementById('4_27').clientWidth;  
          var h = document.getElementById('4_27').clientHeight;  
           cnv =p.createCanvas(w,h);//cnv.style("width:100%");
        x=0;
        y=0;
        theta=2;
        p.noStroke();
        p.rectMode(p.CENTER);
      }

      p.draw=function(){
        p.translate(p.width/2,p.height/2);
        //rotate(-theta/100);
        x = (p.sin(theta)*(p.width)/1.3);
        y = 0;
        p.fill(0);
        for(var i = 0; i < p.height/3; i++){
            
          p.fill(100-i*2,i);
          p.ellipse(i%2==0?x:x, -p.height/2+(i*p.height/100),p.random(p.round(p.width/10)),p.random(p.round(p.width/10)));
        }

        p.fill((0),150+100*p.sin(theta),150+100*p.sin(theta), 1);
        p.rect(0,theta,p.width*2,p.height*2);
        theta+=.01;
        if(theta> (240))theta=2;
        

      }
      p.windowResized=function() {
         var w = 1+ document.getElementById('4_27').clientWidth;  
          var h = document.getElementById('4_27').clientHeight;  
        p.resizeCanvas(w,h);
      }
};
var myp5 = new p5(fts,'4_27');

var lines=function(p){
          var cnv;
          var limit;
          var running;

          var lineLength,started,currentAngle;

          p.setup=function(){
            //frameRate(9);
            var w = 1+ document.getElementById('lines').clientWidth;  
            var h = document.getElementById('lines').clientHeight;  
            cnv =p.createCanvas(w,h);//cnv.style("width:100%");
            //document.getElementById("defaultCanvas0").style('width:100');
            p.stroke(255);
            p.angleMode(p.DEGREES);
            currentAngle = 0;
            lineLength = 100;
            started = false;
            p.strokeWeight(.8);
            p.colorMode(p.HSB, 100);
            v = 0;
            p.background(255);
            running = true;
            window.setInterval(p.animate,90);
          }

          p.animate=function(){
            lineLength = p.random(200);

            p.stroke(v, 100, p.random(100));
            v++;
            if(v == 100) {v = 0;}
            p.drawLines(p.random(p.width), p.random(p.height), p.random(p.width), p.height/2 - lineLength,3012);



          //drawLines(width/2 + lineLength, height/2, width/2 +lineLength, height/2 - lineLength);
          //drawLines(width/2 - lineLength, height/2, width/2 -lineLength, height/2 - lineLength);


            
          }
          p.windowResized=function() {
            var w = 1+ document.getElementById('lines').clientWidth;  
            var h = document.getElementById('lines').clientHeight;  
            p.resizeCanvas(w,h);
          }

          p.drawLines=function(x1,y1,x2,y2,count){
            count--;
            //console.log(count);
            p.line(x1,y1,x2,y2);
            currentAngle+=p.random(.1,100);
            //currentAngle = currentAngle%360;
            var lastx = x2;
            var lasty = y2;
            var newx = lastx - lineLength * p.cos(currentAngle);
            var newy = lasty - lineLength * p.sin(currentAngle);
            if(count>0){p.drawLines(lastx, lasty, newx, newy,count);}
          }
};
var myp5 = new p5(lines,'lines');

var otf = function(p){
      var x,y,z;
      var cnv;

      p.setup=function(){
        var w = 1+ document.getElementById('1_25').clientWidth;  
        var h = document.getElementById('1_25').clientHeight;  
        cnv =p.createCanvas(w,h);
        p.background(200,230,244);
        x=0;
        y=0;
        p.strokeWeight(1);
        p.stroke(0,50);
        p.fill(0,200);
        z=0;
        //cnv.style("width:100%");
      }


      p.draw=function(){
        p.background(200,230,244);
        p.translate(p.width/3,2*p.height/5);
        p.push();
        p.rotate(x);
        x+=.024;
        p.line(p.width/5,p.width/5,-p.width/5,-p.width/5);
        p.ellipse(p.sin(y)*p.width/5,p.sin(y)*p.width/5,23,23);
        p.pop();
        
        p.push();
        p.rotate(y);
        y-=.023;
        p.line(p.width/10,p.width/10,-p.width/10,-p.width/10);
        
        p.ellipse(p.sin(z)*p.width/10,p.sin(z)*p.width/10,15,15);
        p.pop();
        
        p.push();
        p.rotate(z);
        z-=.003;
        p.line(p.width/2,p.width/2,-p.width/2,-p.width/2);
        p.ellipse(p.sin(x)*p.width/2,p.sin(x)*p.width/2,20,20);
        p.pop();
      }
      p.windowResized=function() {
        var w = 1+ document.getElementById('1_25').clientWidth;  
        var h = document.getElementById('1_25').clientHeight;  
        p.resizeCanvas(w,h);
      }
};
var myp5 = new p5(otf,'1_25');

var ots = function(p){
        var cnv;
        var theta;
        var change;
        var b;


        p.setup=function(){

        var w = 1+ document.getElementById('1_27').clientWidth;  
        var h = document.getElementById('1_27').clientHeight;  
        cnv = p.createCanvas(w,h);
        change = 1
        theta=0;
        p.rectMode(p.CENTER);
        p.fill(0);
        b=0;
        p.strokeWeight(1);
        //cnv.style("width:100%");
        p.background(0);
        p.frameRate(10);
        }

        p.draw=function(){
          //rotate(theta/10);
          p.stroke(0,(b+=change)/2,b+=change,30);
          p.stroke(200,(b+=change)/2,100,40);
          //background(150,200,250);
          p.translate(p.width/2,p.height/2);
          p.rotate(theta);
          p.line(-p.width/6,0,p.width/4);
          //ellipse(0,0,10,10);
          p.branch(p.width/4,0);
          p.branch(-p.width/4,0);
          p.branch(0,p.width/4);
          p.branch(0,-p.width/4);
          //translate
          theta+=3;
          
          if(b>255){change=-change;}
          if(b<0){change=-change;}
          //if(theta>1)noLoop();
          p.background(0,6);
          
        }

        p.branch=function(x,y){
          if((x>p.width/50)||(x<-p.width/50)||(y>p.width/50)||(y<-p.width/50)){
            p.push();
            p.translate(x,y);
            p.rotate(theta);
            p.line(-x/(3/2),y/((3/2)),x/(3/2),-y/((3/2)));
            //ellipse(0,0,2,2);
            p.branch(x/(3/2),y/((3/2)));
            p.branch(-x/(3/2),-y/(3/2));
            p.pop();
          }

        }
        p.windowResized=function() {
          var w = 1+ document.getElementById('1_27').clientWidth;  
          var h = document.getElementById('1_27').clientHeight;  
          p.resizeCanvas(w,h);
          p.background(0);
        }
};

var myp5 = new p5(ots,'1_27');

var toz = function(p){

      var theta = 0;
      var theta2 = 0;
      var cnv;
      p.setup=function(){

          var w = 1+ document.getElementById('2_10').clientWidth;  
          var h = document.getElementById('2_10').clientHeight;  
          cnv =p.createCanvas(w,h);
        //frameRate(40);
        p.noStroke();
        //cnv.style("width:100%");
      }

      p.draw=function(){
       p.background(190);
        theta+=.03;
        theta2-= .03;
        p.fill(0,200,200);
        p.ellipse(p.width/2,p.height/2,390,390);
        var x1 = p.width/2 + 65*p.cos(theta);
        var y1 = p.height/2 + 65*p.sin(theta);
        p.fill(200,0,200);
        p.ellipse(x1,y1,245,245);
        var x2 = x1 + 40*p.cos(theta2*2);
        var y2 = y1 + 40*p.sin(theta2*2);
        p.fill(200,200,0);
        p.ellipse(x2,y2,150,150);
        var x3 = x2 + 23*p.cos(theta*3);
        var y3 = y2 + 23*p.sin(theta*3);
        p.fill(15,150,100);
        p.ellipse(x3,y3,90,90);
        var x4 = x3 + 15*p.cos(theta2*4);
        var y4 = y3 + 15*p.sin(theta2*4);
        p.fill(15,15,50);
        p.ellipse(x4,y4,50,50);
        var x5 = x4 + 8*p.cos(theta*5);
        var y5 = y4 + 8*p.sin(theta*5);
        p.fill(235,235,235);
        p.ellipse(x5,y5,25,25);
       
      }
       p.windowResized=function() {
         var w = 1+ document.getElementById('2_10').clientWidth;  
          var h = document.getElementById('2_10').clientHeight; 
        p.resizeCanvas(w,h);
      }
      }
var myp5 = new p5(toz,'2_10');