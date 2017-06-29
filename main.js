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

// loop
	


   var youtube = document.querySelectorAll( ".youtube" );
    
    for (var i = 0; i < youtube.length; i++) {
        
        var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
        
        var image = new Image();
                image.src = source;
                image.addEventListener( "load", function() {
                    youtube[ i ].appendChild( image );
                }( i ) );
        
                youtube[i].addEventListener( "click", function() {

                    var iframe = document.createElement( "iframe" );

                            iframe.setAttribute( "frameborder", "0" );
                            iframe.setAttribute( "allowfullscreen", "" );
                            iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

                            this.innerHTML = "";
                            this.appendChild( iframe );
                } );    
    };
    