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
		volume: 0.2
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
		volume: 0.04
	}),
	start: new Howl({
		src: [
			"assets/start.mp3"
		],
		loop: false,
		volume: 0.02
	}),
	open: new Howl({
		src: [
			"assets/open.mp3"
		],
		loop: false,
		volume: 0.2
	}),
	stage: new Howl({
		src: [
			"assets/stageWin.mp3"
		],
		loop: false,
		volume: 0.2
	})
}

window.addEventListener("load", function () {
	document.getElementById("play").addEventListener("click", sonarMusica);
	document.getElementById("stop").addEventListener("click", pararMusica);
});

function sonarMusica() {

	if (!music.overworld.playing()) {
		sfx.open.play();
		music.overworld.play();
	}
}

function pararMusica() {
	sfx.open.play();
	music.overworld.pause();
}