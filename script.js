const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function getComputerChoice() {
  const number = Math.random();
  if (number < 0.3) {
    return 'rock';
  } 
  else if (number >= 0.3 && number < 0.6) {
    return 'paper';
  }
  else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let result = '';

  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      result = 'Tie';
    }
    else if (computerSelection === 'paper') {
      result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection === 'scissors') {
      result = `You win! ${playerSelection} beats ${computerSelection}`;
    }
  }
  else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      result = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection === 'paper') {
      result = 'Tie';
    }
    else if (computerSelection === 'scissors') {
      result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection === 'paper') {
      result = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection === 'scissors') {
      result = 'Tie';
    }
  }

  return result;
}