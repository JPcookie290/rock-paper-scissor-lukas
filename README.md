# Rock Paper Scissors

#### Introduction

In this game you play the classic game Rock-Paper-Scissors against the computer.

click your choice for (rock = Stein, paper = Papier, scissors = Schere).

After each choice you will see, if you won the round or not.

If someone reaches 5 amount of wins, the game will show, who won and the final score.

#### Code Explanation

```
computerPlay()
```

This function chooses a random number between 0 and 2, uses it as index value for a list with the rock, paper, scissor
commands and returns the value.

```
playRound()
```

This function lets the player choose his/her choice and then compares it with the choice of the computer.
Depending on win, loss or draw the function returns a different value.

```
game()
```

This function starts the whole game and lets you choose the number of necessary wins.
Then after every win or loss a counter goes up for you or the computer.
If one counter reaches the necessary wins the loop stops and the winner will be put in the return command.
