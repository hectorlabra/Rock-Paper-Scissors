/* 
- Make an array with the options
- Create a function for the computer choice
- Make a random choice for the the computer going through the array
- Write a function that plays a single round of Rock Paper Scissors
*/

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "player";
    }
    else {
        return "computer";
    }
} 

function playRound(playerSelection, computerSelection) {
    
  }

getComputerChoice();