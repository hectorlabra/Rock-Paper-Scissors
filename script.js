const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const resultText = document.getElementById('result-text');
const scoreText = document.getElementById('score-text');

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = determineWinner(playerSelection, computerSelection);
    updateGameResult(playerSelection, computerSelection, result);
    updateScore(result);
}

function determineWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection === computerSelection) {
        return 'Draw';
    } else {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}

function updateGameResult(playerSelection, computerSelection, result) {
    resultText.textContent = 'Result: ' + result;
    console.log('Player Selection: ' + playerSelection);
    console.log('Computer Selection: ' + computerSelection);
    console.log('Result: ' + result);
}

function updateScore(result) {
    if (result.includes('Win')) {
        playerScore++;
    } else if (result.includes('Lose')) {
        computerScore++;
    }

    scoreText.textContent = 'Score: Player ' + playerScore + ' - Computer ' + computerScore;
}

// ... (rest of your JavaScript code)
