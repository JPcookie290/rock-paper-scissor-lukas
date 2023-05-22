"use strict";

let playerRoll = prompt("Geben Sie Ihre Wahl ein (Schere / Stein / Papier):");

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

let playRound = (playerRoll, computerRoll) => {
  let ergebnis = "";
  if (playerRoll === "Schere" && computerRoll === "Stein") {
    ergebnis = "Du verlierst! - Stein schlägt Schere";
  } else if (playerRoll === "Schere" && computerRoll === "Papier") {
    ergebnis = "Du gewinnst! - Schere schlägt Papier";
  } else if (playerRoll === "Schere" && computerRoll === "Schere") {
    ergebnis = "Unentschieden!";
  } else if (playerRoll === "Stein" && computerRoll === "Stein") {
    ergebnis = "Unentschieden!";
  } else if (playerRoll === "Stein" && computerRoll === "Papier") {
    ergebnis = "Du verlierst! - Papier schlägt Stein";
  } else if (playerRoll === "Stein" && computerRoll === "Schere") {
    ergebnis = "Du gewinnst! - Stein schlägt Schere";
  } else if (playerRoll === "Papier" && computerRoll === "Stein") {
    ergebnis = "Du gewinnst! - Papier schlägt Stein";
  } else if (playerRoll === "Papier" && computerRoll === "Papier") {
    ergebnis = "Unentschieden!";
  } else if (playerRoll === "Papier" && computerRoll === "Schere") {
    ergebnis = "Du verlierst! - Schere schlägt Papier";
  }
  return ergebnis;
};

console.log(playRound(playerRoll, computerPlay()));
