"use strict";

let computerPlay = () => {
  let computerRoll = parseInt(Math.random() * 3 + 1);
  if (computerRoll === 1) {
    computerRoll = "Schere";
  } else if (computerRoll === 2) {
    computerRoll = "Stein";
  } else if (computerRoll === 3) {
    computerRoll = "Papier";
  }
  return computerRoll;
};

let playRound = (computerRoll) => {
  let playerRoll = prompt(
    "Geben Sie Ihre Wahl ein (Schere / Stein / Papier):"
  ).toLowerCase();
  let ergebnis = 0;
  if (playerRoll === "schere" && computerRoll === "Stein") {
    console.log("Du verlierst! - Stein schlägt Schere");
    ergebnis = 1;
  } else if (playerRoll === "schere" && computerRoll === "Papier") {
    console.log("Du gewinnst! - Schere schlägt Papier");
    ergebnis = 2;
  } else if (playerRoll === "schere" && computerRoll === "Schere") {
    console.log("Unentschieden!");
    ergebnis = 0;
  } else if (playerRoll === "stein" && computerRoll === "Stein") {
    console.log("Unentschieden!");
    ergebnis = 0;
  } else if (playerRoll === "stein" && computerRoll === "Papier") {
    console.log("Du verlierst! - Papier schlägt Stein");
    ergebnis = 1;
  } else if (playerRoll === "stein" && computerRoll === "Schere") {
    console.log("Du gewinnst! - Stein schlägt Schere");
    ergebnis = 2;
  } else if (playerRoll === "papier" && computerRoll === "Stein") {
    console.log("Du gewinnst! - Papier schlägt Stein");
    ergebnis = 2;
  } else if (playerRoll === "papier" && computerRoll === "Papier") {
    console.log("Unentschieden!");
    ergebnis = 0;
  } else if (playerRoll === "papier" && computerRoll === "Schere") {
    console.log("Du verlierst! - Schere schlägt Papier");
    ergebnis = 1;
  }
  return ergebnis;
};

let game = () => {
  let computerWin = 0;
  let playerWin = 0;
  let winner = "";
  while (computerWin != 5 && playerWin != 5) {
    let ergebnis = playRound(computerPlay());
    if (ergebnis === 1) {
      computerWin += 1;
    } else if (ergebnis === 2) {
      playerWin += 1;
    }
  }
  if (computerWin === 5) {
    winner = "Der Computer hat gewonnen - " + computerWin + " zu " + playerWin;
  } else if (playerWin === 5) {
    winner = "Sie haben gewonnen - " + playerWin + " zu " + computerWin;
  }
  return winner;
};

console.log(game());
