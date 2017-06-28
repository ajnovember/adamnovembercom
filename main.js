var active = false;

function switcher(){
	if(!active){
		document.getElementById("words").classList.remove("hidden");
		document.getElementById("words").classList.add("visible");
		active=true
		document.getElementsByClassName("navButton")[0].innerHTML="no words"
	}
	else{
		document.getElementById("words").classList.add("hidden");
		document.getElementById("words").classList.remove("visible");
		active=false
		document.getElementsByClassName("navButton")[0].innerHTML="words"
	}
		
}