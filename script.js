// let's create rock paper scissors game in javascript console
// Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!




function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection === computerSelection) {
        return 'Draw';
    }
}

// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose Rock, Paper, or Scissors');
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log('Player Selection: ' + playerSelection);
        console.log('Computer Selection: ' + computerSelection);
        console.log('Result: ' + result);
        
        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        } else {
            playerScore++;
            computerScore++;
        }
    }
    
    console.log('Player Score: ' + playerScore);
    console.log('Computer Score: ' + computerScore);
    
    if (playerScore > computerScore) {
        console.log('You Win!');
        return 'You Win!';
    } else if (playerScore < computerScore) {
        console.log('You Lose!');
        return 'You Lose!';
    } else {
        console.log('It\'s a Draw!');
        return 'Draw';
    }
}

// Call the game function to start playing
game();
