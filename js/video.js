const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const slowerBtn = document.querySelector('#slower');
const fasterBtn = document.querySelector('#faster');
const skipBtn = document.querySelector('#skip');
const volumeSlider = document.querySelector('#slider');
const video = document.querySelector('#player1');
const muteBtn = document.querySelector('#mute');
const oldBtn = document.querySelector('#vintage');
const originBtn = document.querySelector('#orig');
var volume = document.querySelector('#volume');

window.addEventListener("load", ()=>{
	document.querySelector("#player1").preload = 'auto';
	video.autoplay = false;
	video.loop = false;
});

playBtn.addEventListener("click", ()=>{
	console.log('play video');
	video.play();
	volume.innerHTML = volumeSlider.value+ '%';
});

pauseBtn.addEventListener("click", ()=>{
	console.log('pause video');
	video.pause();
});

slowerBtn.addEventListener("click",()=>{
	video.playbackRate *= 0.95;
	console.log("current speed is:" + video.playbackRate);
});

fasterBtn.addEventListener("click",()=>{
	video.playbackRate *= 1.05;
	console.log("current speed is:" + video.playbackRate);
});

skipBtn.addEventListener("click",()=>{
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0; 
	};
	
	console.log("current position is:" + video.currentTime);
});

muteBtn.addEventListener("click",()=>{
	if(muteBtn.innerHTML == "Mute"){
		video.muted = true;
		muteBtn.innerHTML = "Unmute";
		console.log("mute");
	}else{
		video.muted = false;
		muteBtn.innerHTML = "Mute";
		console.log("unmute");
	}
});

volumeSlider.addEventListener("change",()=>{
	volume.innerHTML = volumeSlider.value + "%";
	video.volume = volumeSlider.value/100;
	console.log(video.volume);
});

oldBtn.addEventListener("click",()=>{
	video.classList.add('oldSchool');
});

originBtn.addEventListener("click",()=>{
	video.classList.remove('oldSchool');
});