const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', (event) => {
  playRound(event.target.id);
});

paperBtn.addEventListener('click', (event) => {
  playRound(event.target.id);
});

scissorsBtn.addEventListener('click', (event) => {
  playRound(event.target.id);
});

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

function playRound(playerSelection) {
  let result = '';
  let computerSelection = getComputerChoice();

  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
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
    }
  }
  return result;
}
