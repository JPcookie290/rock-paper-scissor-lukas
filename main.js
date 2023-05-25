"use strict";

/* function for random computer choice */
let computerPlay = () => {
  let computerChoice = ["schere", "stein", "papier"];
  let computerRoll = Math.floor(Math.random() * 3);
  return computerChoice[computerRoll];
};

/* function for a single round of the game */

let playRound = (computerRoll) => {
  let playerRoll = prompt(
    "Geben Sie Ihre Wahl ein (Schere / Stein / Papier):"
  ).toLowerCase();
  while (
    playerRoll != "schere" &&
    playerRoll != "stein" &&
    playerRoll != "papier"
  ) {
    playerRoll = prompt(
      "Bitte geben Sie eine gültige Wahl ein (Schere / Stein / Papier):"
    ).toLowerCase();
  }
  let ergebnis = 0;
  if (playerRoll === "schere" && computerRoll === "stein") {
    console.log("Du verlierst! - Stein schlägt Schere");
    ergebnis = 1;
  } else if (playerRoll === "schere" && computerRoll === "papier") {
    console.log("Du gewinnst! - Schere schlägt Papier");
    ergebnis = 2;
  } else if (playerRoll === "stein" && computerRoll === "papier") {
    console.log("Du verlierst! - Papier schlägt Stein");
    ergebnis = 1;
  } else if (playerRoll === "stein" && computerRoll === "schere") {
    console.log("Du gewinnst! - Stein schlägt Schere");
    ergebnis = 2;
  } else if (playerRoll === "papier" && computerRoll === "stein") {
    console.log("Du gewinnst! - Papier schlägt Stein");
    ergebnis = 2;
  } else if (playerRoll === "papier" && computerRoll === "schere") {
    console.log("Du verlierst! - Schere schlägt Papier");
    ergebnis = 1;
  } else if (playerRoll === computerRoll) {
    console.log("Unentschieden!");
    ergebnis = 0;
  }
  return ergebnis;
};

/* function for the whole game */

let game = () => {
  let computerWin = 0;
  let playerWin = 0;
  let winner = "";
  let winSelect = parseInt(
    prompt("Geben Sie ein, wie viele Siege nötig sind um zu gewinnen:")
  );
  while (computerWin != winSelect && playerWin != winSelect) {
    /* play until one has five points */
    let ergebnis = playRound(computerPlay());
    if (ergebnis === 1) {
      computerWin += 1;
    } else if (ergebnis === 2) {
      playerWin += 1;
    }
  }

  /* winning conditions */

  if (computerWin === winSelect) {
    winner = "Der Computer hat gewonnen - " + computerWin + " zu " + playerWin;
  } else if (playerWin === winSelect) {
    winner = "Sie haben gewonnen - " + playerWin + " zu " + computerWin;
  }
  return winner;
};

//console.log(game());
