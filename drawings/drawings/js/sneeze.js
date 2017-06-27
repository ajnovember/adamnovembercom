/**
 * Created by Adam on 1/10/16.
 */
 var cnv;
 var borderFill, borderNoFill, eyeLeft, eyeRight,faceFeatures,faceFull,hair,noseLeft,noseRight,shapeBlue,shapeOrange,shapeYellow,textNormal,textReverse;

function preload(){
 borderFill = loadImage("../imgs/argo/Sneeze_asset_borderfill.png");
 borderNoFill = loadImage("../imgs/argo/Sneeze_asset_bordernofill.png");
 eyeLeft = loadImage("../imgs/argo/Sneeze_asset_eyeleft.png");
 eyeRight = loadImage("../imgs/argo/Sneeze_asset_eyeRight.png");
 faceFeatures = loadImage("../imgs/argo/Sneeze_asset_facefeatures.png");
 faceFull = loadImage("../imgs/argo/Sneeze_asset_facefull.png");
 hair = loadImage("../imgs/argo/Sneeze_asset_hair.png");
 noseLeft = loadImage("../imgs/argo/Sneeze_asset_noseleft.png");
 noseRight = loadImage("../imgs/argo/Sneeze_asset_noseRight.png");
 shapeBlue = loadImage("../imgs/argo/Sneeze_asset_shapeblue.png");
 shapeOrange = loadImage("../imgs/argo/Sneeze_asset_shapeorange.png");
 shapeYellow = loadImage("../imgs/argo/Sneeze_asset_shapeYellow.png");
 textNormal = loadImage("../imgs/argo/Sneeze_asset_text.png");
 textReverse = loadImage("../imgs/argo/Sneeze_asset_textreverse.png");

}

function setup(){
  cnv = createCanvas(windowWidth,windowHeight);
 console.log(width);
  cnv.position(0,0);
  background(206,209,193);
  imageMode(CENTER);


}

function draw(){
  image(faceFull,width/2,height/2);

}


function mousePressed(){
 console.log(mouseX,mouseY);
}

var part = function(x,y,img){
 this.position = createVector(x,y);
 this.img = img;
}

part.prototype = {
 update:function(){
  image();
 }
}

