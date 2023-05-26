"use strict";

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let punktePc = document.getElementById('punktePc');
let punktePr = document.getElementById('punktePr');
let info = document.getElementById('textInfo');
let reset = document.getElementById('reset');

let computerWin = 0;
let playerWin = 0;
/* function for random computer choice */

let computerPlay = () => {
  let computerChoice = ["schere", "stein", "papier"];
  let computerRoll = Math.floor(Math.random() * 3);
  return computerChoice[computerRoll];
}
/* function for player choice */

let playerRoll = "";
rock.onclick = function rock() {
  playerRoll = "stein";
  game();
}
paper.onclick = function paper() {
  playerRoll = "papier";
  game();
}
scissor.onclick = function scissor() {
  playerRoll = "schere";
  game();
}

/* function for a single round of the game */

let playRound = (playerRoll, computerRoll) => {
  let ergebnis = 0;
  if (playerRoll === "schere" && computerRoll === "stein") {
    info.innerHTML = "Computer wählt Stein" + "<br>" + "<br>" + "Du verlierst! - Stein schlägt Schere"
    ergebnis = 1;
  } else if (playerRoll === "schere" && computerRoll === "papier") {
    info.innerHTML = "Computer wählt Papier" + "<br>" + "<br>" + "Du gewinnst! - Schere schlägt Papier"
    ergebnis = 2;
  } else if (playerRoll === "stein" && computerRoll === "papier") {
    info.innerHTML = "Computer wählt Papier" + "<br>" + "<br>" + "Du verlierst! - Papier schlägt Stein"
    ergebnis = 1;
  } else if (playerRoll === "stein" && computerRoll === "schere") {
    info.innerHTML = "Computer wählt Schere" + "<br>" + "<br>" + "Du gewinnst! - Stein schlägt Schere"
    ergebnis = 2;
  } else if (playerRoll === "papier" && computerRoll === "stein") {
    info.innerHTML = "Computer wählt Stein" + "<br>" + "<br>" + "Du gewinnst! - Papier schlägt Stein"
    ergebnis = 2;
  } else if (playerRoll === "papier" && computerRoll === "schere") {
    info.innerHTML = "Computer wählt Schere" + "<br>" + "<br>" + "Du verlierst! - Schere schlägt Papier"
    ergebnis = 1;
  } else if (playerRoll === computerRoll) {
    info.innerHTML = "Unentschieden!"
    ergebnis = 0;
  }
  return ergebnis;
};

/* function for the whole game */

let game = () => {
  let winner = "";
  /* play until one has five points */
  if (computerWin < 5 && playerWin < 5) {
    let ergebnis = playRound(playerRoll, computerPlay());
    if (ergebnis === 1) {
      computerWin += 1;
      punktePc.textContent = computerWin;
    } else if (ergebnis === 2) {
      playerWin += 1;
      punktePr.textContent = playerWin;
    }
  }
  
  /* winning conditions */

  if (computerWin === 5) {
    winner = "Der Computer hat gewonnen - " + computerWin + " zu " + playerWin;
  } else if (playerWin === 5) {
    winner = "Sie haben gewonnen - " + playerWin + " zu " + computerWin;
  }
  return winner;
};

/* reset */

reset.onclick = function resetAll() {
  computerWin = 0;
  punktePc.textContent = computerWin;
  playerWin = 0;
  punktePr.textContent = playerWin;
  info.innerHTML = ""
  console.log("reset");
}
