// Step 1: Add event listeners to buttons
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

    // Check if one of the players reached 5 points
    if (playerScore === 5) {
        announceWinner('Player');
        resetGame();
    } else if (computerScore === 5) {
        announceWinner('Computer');
        resetGame();
    } else if (playerScore === 5 && computerScore === 5) {
        announceWinner('It\'s a Draw!');
        resetGame();
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
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

function announceWinner(winner) {
    resultText.textContent = winner + ' wins the game!';
    console.log(winner + ' wins the game!');
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    scoreText.textContent = 'Score: Player 0 - Computer 0';
}

// Add event listeners to buttons
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
