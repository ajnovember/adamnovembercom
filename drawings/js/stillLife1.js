var cnv;

function setup(){
    cnv = createCanvas(750,850);
    //cnv.position(windowWidth/4,5);
    background(205);
    table();
    pot();
    books();
    statue();
    tree();
    frameRate(1);
}


function table(){
    strokeWeight(20);
    fill(250,130);
    quad(-350,750,250,550,1150,750,440,1060);
}

function pot(){
    noStroke();
    fill(35);
    ellipse(270,605,170,50);


    fill(120)
    arc(270,405,180,450, 0,PI);


   // for(var i = 0)
    fill(20);
    arc(270,415,180,45, 0,PI);
    fill(100);
    ellipse(270,405,200,60);
    fill(30);
    ellipse(270,403,150,50);
    fill(50);
    quad(355,605,185,605,200,645,325,645);
    arc(270,643,140,20, 0,PI);



}

function books(){
    fill(50)
    quad(300,700,650,715,650,785,300,770);
    fill(20);
    quad(300,700,335,600,620,610,650,715);
    fill(100);
    quad(330,697,600,707,600,655,330,645);
    fill(120);
    quad(600,655,330,645,345,595,592,605);
}

function mousePressed(){
    console.log(mouseX,mouseY);
}

function branch(x,y,height,change,phase){
    var width = 30;
    var theta= phase;
    for(var i = 0; i< height; i++){
        ellipse(x + (cos(theta*PI)*10),y - i, width,width/2);
        theta+=change;
        width-=.05;
    }
}

function tree(){
    fill(110,100);
    branch(275,418,320,-.005,0);
    fill(80,100);
    branch(270,418,300,-.005,1);
    fill(100,100);
    branch(290,415,310,-.003,2);
    fill(70,100);
    branch(250,415,315,-.004, -.9);
    leaf(270,100,100,3);
    leaf(250,90,120,4);
    leaf(290,100,100,3);
    leaf(260,70,120,4);
    leaf(240,80,120,3);
    leaf(210,100,100,3);
    leaf(180,70,120,4);
    leaf(300,90,100,3);
    leaf(120,50,120,4);
    leaf(340,60,120,3);
    leaf(210,50,100,3);
    leaf(380,40,120,4);
    leaf(370,90,100,3);
    leaf(400,40,120,4);
    leaf(240,0,120,3);
    leaf(210,0,100,3);
    leaf(180,0,120,4);


}

function leaf(x,y,length,num){
    push();
    translate(x,y);
    var angle = (2*PI)/num;
    for(var j = 0; j< num; j++){
        rotate(random(angle,angle*1.2));
        fill(random(80,120));
        var theta = PI/2;
        var thisLength = length+j*10;
        var inc = (PI)/thisLength;
        for(var i = 0; i < thisLength; i++){


            ellipse(0,0+i,cos(theta)*50,2);
            theta+=inc;


        }

    }
   pop();


}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function statue(){
    fill(235);
    quad(380,560,380,635,480,640,480,565);
    fill(215);
    quad(380,560,480,565,470,530,390,525);
    fill(245);
    rect(400,420,90,115,15);
    quad(400,539,451,553,450,530,410,450);
    ellipse(490,504,2,2);
    ellipse(490,513,2,2);
    fill(205);
    triangle(485,465,493,476,478,488);
    triangle(475,466,474,445,450,459);

    triangle(471,510,490,507,491,510);
    triangle(448,535,431,531,452,548);

    fill(235);
    ellipse(466,456,15,15);
    fill(245);
    triangle(486,460,498,481,480,495);


    for(var i = 0; i < 100; i++){
        var y = 440 + 70 * cos(map(i, 0,100,2,3.7));
        strand(i + 390,y,map(i, 0,100,100,35));
    }

}

function strand(x,y,length){
    fill(random(170,250));
    var dia = 10;
    var change = .04;
    var theta= random(5);
    for(var i = 0; i< length + random(10); i++){
        ellipse(x + (cos(theta*PI)*10),y + i, dia,dia/2);
        theta+=change;

    }
}