const idleRaceTrack = document.getElementById("idle-race-track");
const ctx = idleRaceTrack.getContext("2d");

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

idleRaceTrack.width = windowWidth / 2;
idleRaceTrack.height = windowHeight / 2;

ctx.fillStyle = "green";
ctx.fillRect(10, 10, windowWidth / 2, windowHeight / 2);
