// let é CRIAR uma variável //
let video = document.getElementsByClassName("comidasaudavel")[0];
function play() {
  video.play();
  video.playbackRate = 1;
  video.requestFullscreen();
}
function pause() {
  video.pause();
}
function stop() {
  video.pause();
  video.currentTime = 0;
}

function reduzir() {
  video.playbackRate -= 0.1;
}
function adiantar() {
  video.playbackRate += 0.1;
}

function retroceder() {
  video.currentTime -= 10;
}
function avancar() {
  video.currentTime += 10;
}
