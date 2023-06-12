/* 
- Make an array with the options
- Create a function for the computer choice
- Make a random choice for the the computer going through the array
*/

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

getComputerChoice();