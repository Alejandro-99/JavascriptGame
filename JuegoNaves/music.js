var music = {
	overworld: new Howl({
		src: [
			"assets/music.mp3"
		],
		loop: true,
		volume: 0.09
	})
}

var sfx = {
	boost: new Howl({
		src: [
			"assets/laser.mp3"
		],
		loop: false,
		volume: 0.01
	}),
	win: new Howl({
		src: [
			"assets/win.mp3"
		],
		loop: false,
		volume: 0.09
	}),
	lose: new Howl({
		src: [
			"assets/lose.mp3"
		],
		loop: false,
		volume: 0.09
	}),
	explo: new Howl({
		src: [
			"assets/explosion.mp3"
		],
		loop: false,
		volume: 0.05
	})
}

window.addEventListener("load", function () {
	document.getElementById("play").addEventListener("click", sonarMusica);
	document.getElementById("stop").addEventListener("click", pararMusica);
});

function sonarMusica() {

	if (!music.overworld.playing()) {
		music.overworld.play();
	}
}

function pararMusica() {

	music.overworld.pause();
}