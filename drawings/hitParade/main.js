var branches = [];
var active = 10;
var clips = [];
var finished = false;

function  setup(){
   c1 = loadSound("audio/Hitparadecut_p1.mp3");
   c2 = loadSound("audio/Hitparadecut_p2.mp3");
   c3 = loadSound("audio/Hitparadecut_p3.mp3");
   c4 = loadSound("audio/Hitparadecut_p4.mp3");
   c5 = loadSound("audio/Hitparadecut_p5.mp3");
   c6 = loadSound("audio/Hitparadecut_p6.mp3");
   c7 = loadSound("audio/Hitparadecut_p7.mp3");
   c8 = loadSound("audio/Hitparadecut_p8.mp3");
   c9 = loadSound("audio/Hitparadecut_p9.mp3");
   c10 = loadSound("audio/Hitparadecut_p10.mp3", finishLoad());
   clips = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10];
   masterVolume(.5);
   
}

$( document ).ready(function() {
   // console.log( "ready!" );
     $('img[usemap]').rwdImageMaps();
     $('#edit-submitted-zip-code'){

     }
    init();
});

var song;



function init(){
	

	var imgs = document.getElementsByClassName("piece");
	var maps = document.getElementsByClassName("mapSect");
	for(var i = 0;i<10;i++){
		var newBranch = new	Branch(maps[i],imgs[i],null);
		branches.push(newBranch);
	}
	//console.log(branches);
	for(var i = 0;i<active;i++){
		//branches[i].img.style = "display:inline";
		branches[i].img.classList.add("active");
	}

}


var Branch = function(map,img,song){
	this.map=map;
	this.img=img;
	this.song=song;



}

function hovered(i){
	var j = i-1;
	if(j<active){		
		branches[j].img.style.transform="scale(1.05)";

		branches[j].img.style.msTransform="scale(1.05)";

		branches[j].img.style.webkitTransform="scale(1.05)";
		//$(branches[j].img).effect("shake",{times:10,distance:10}, 10000);
		
		
	//	$(branches[j].img).effect("shake",{times:10,distance:10,direction:'up'}, 10000);
		
		if(finished){
			console.log('loaded = ', clips[j].isLoaded());
			if(clips[j].isLoaded()){
				stopAll();
				clips[j].play();
				clips[j].setVolume(1.0,.5);
			}
		}
	}
	
}


function exited(i){
	var j = i-1;

	if(j<active){		
		branches[j].img.style = "display:inline";
		branches[j].img.style.transform="scale(1.0)";

		branches[j].img.style.msTransform="scale(1.0)";

		branches[j].img.style.webkitTransform="scale(1.0)";
		clips[j].setVolume(0,.5);
	}
}

function stopAll(){
	for(var i=0;i<10;i++){
		console.log('stop all', clips[i].isPlaying);
		if(clips[i].isPlaying()){

			clips[i].stop();

			
			$(branches[i].img).stop(true,true);

		}
		
	}
}

function finishLoad(){
	finished=true;
	//console.log("loaded");
}

function launchForm(){
	document.getElementById('form').classList.add("active");
	document.getElementById('form').classList.remove("inactive");
	document.getElementById('x').classList.add("active");
	document.getElementById('x').classList.remove("inactive");

}

function removeForm(){
	document.getElementById('form').classList.remove("active");
	document.getElementById('x').classList.add("inactive");
	document.getElementById('x').classList.remove("active");
	document.getElementById('form').classList.add("inactive");

}







