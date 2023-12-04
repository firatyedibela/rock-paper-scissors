function getPlayerChoice() {
  return prompt('Your move: ');
}

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
      result = 'Tie! Pick a move again.';
      console.log(result);
      result = playRound(getPlayerChoice(), getComputerChoice());
    }
    else if (computerSelection === 'paper') {
      result = `You lose the round! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection === 'scissors') {
      result = `You win the round! ${playerSelection} beats ${computerSelection}`;
    }
  }
  else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      result = `You win the round! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection === 'paper') {
      result = 'Tie! Pick a move again.';
      console.log(result);
      result = playRound(getPlayerChoice(), getComputerChoice());
    }
    else if (computerSelection === 'scissors') {
      result = `You lose the round! ${computerSelection} beats ${playerSelection}`;
    }
  }
  else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      result = `You lose the round! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection === 'paper') {
      result = `You win the round! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection === 'scissors') {
      result = 'Tie! Pick a move again.';
      console.log(result);
      result = playRound(getPlayerChoice(), getComputerChoice());
    }
  }

  return result;
}

let playerChoice = getPlayerChoice();

let computerChoice = getComputerChoice();

result = playRound(playerChoice, computerChoice);
console.log(result);
