let homeScore = 0;
let homeEl = document.getElementById("homescore");

function addHomeScore(value) {
  homeScore += parseInt(value);
  homeEl.textContent = homeScore;
}

let awayScore = 0;
let awayEl = document.getElementById("awayscore");

function addAwayScore(value) {
  awayScore += parseInt(value);
  awayEl.textContent = awayScore;
}

let endGame = document.getElementById("endgame");

endGame.addEventListener("click", function () {
  document.getElementById("end-screen").style.display = "flex";
  document.getElementById("container").style.display = "none";
  let buttons = document.getElementsByClassName("scoring");
  for (button of buttons) {
    button.classList.add("hidden");
  }
  if (homeScore > awayScore) {
    document.getElementById("winning-message").innerText = `
        HOME TEAM WINS`;
  } else if (awayScore > homeScore) {
    document.getElementById("winning-message").innerText = `
        AWAY TEAM WINS`;
  } else {
    document.getElementById("winning-message").innerText = `
        DRAW`;
  }
});

let startGame = document.getElementById("newGame");

startGame.addEventListener("click", function () {
  document.getElementById("end-screen").style.display = "none";
  document.getElementById("container").style.display = "flex";
  let buttons = document.getElementsByClassName("scoring");
  for (button of buttons) {
    button.classList.remove("hidden");
  }
  homeScore = 0;
  awayScore = 0;
  homeEl.textContent = homeScore;
  awayEl.textContent = awayScore;
});
