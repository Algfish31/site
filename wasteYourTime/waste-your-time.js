var secondsWasted = 0;

setInterval(function() {
  secondsWasted = secondsWasted + 1;
  document.getElementById("time-wasted").innerHTML = secondsWasted;
}, 1000);

document.onkeydown = (e) => {
  if (e.key == 123) {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'I') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'C') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'J') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.key == 'U') {
      e.preventDefault();
  }
};

function saveGame() {
  var gameSave = {
    secondsWasted: secondsWasted
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.secondsWasted !== "undefined") secondsWasted = savedGame.secondsWasted;
  document.getElementById("time-wasted").innerHTML = secondsWasted
}

setInterval(function () {
  saveGame();
}, 1000);

window.onload = function () {
  loadGame();
};