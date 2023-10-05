const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const resultText = document.getElementById('result-text');
const scoreText = document.getElementById('score-text');

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

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


game();
