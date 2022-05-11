window.addEventListener("load",function(){
	document.getElementById("play").addEventListener("click",sonarMusica);
	document.getElementById("stop").addEventListener("click",pararMusica);			
});

function sonarMusica(){
	var sonido = document.createElement("iframe");
	sonido.setAttribute("src","assets/music.mp3");
	document.body.appendChild(sonido);
	document.getElementById("play").removeEventListener("click",sonarMusica);
}

function pararMusica(){
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.getElementById("play").addEventListener("click",sonarMusica);
	}
}