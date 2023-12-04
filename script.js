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
      console.log(`You lose the round! ${computerSelection} beats ${playerSelection}`);
      result = 0;
    }
    else if (computerSelection === 'scissors') {
      console.log(`You win the round! ${playerSelection} beats ${computerSelection}`);
      result = 1;
    }
  }
  else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      console.log(`You win the round! ${playerSelection} beats ${computerSelection}`);
      result = 1;
    }
    else if (computerSelection === 'paper') {
      result = 'Tie! Pick a move again.';
      console.log(result);
      result = playRound(getPlayerChoice(), getComputerChoice());
    }
    else if (computerSelection === 'scissors') {
      console.log(`You lose the round! ${computerSelection} beats ${playerSelection}`);
      result = 0;
    }
  }
  else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      console.log(`You lose the round! ${computerSelection} beats ${playerSelection}`);
      result = 0;
    }
    else if (computerSelection === 'paper') {
      console.log(`You win the round! ${playerSelection} beats ${computerSelection}`);
      result = 1;
    }
    else if (computerSelection === 'scissors') {
      console.log('Tie! Pick a move again.');
      result = playRound(getPlayerChoice(), getComputerChoice());
    }
  }

  return result;
}

let playerChoice = getPlayerChoice();

let computerChoice = getComputerChoice();

result = playRound(playerChoice, computerChoice);
console.log(result);
