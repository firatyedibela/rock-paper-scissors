const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const scoreDiv = document.querySelector('#score');

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
  let computerSelection = getComputerChoice();

  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      scoreDiv.innerText = 'Tie. Pick a move again.';
    }
    else if (computerSelection === 'paper') {
      scoreDiv.innerText = `You lose the round! ${computerSelection} beats ${playerSelection}`;
      
    }
    else if (computerSelection === 'scissors') {
      scoreDiv.innerText = `You win the round! ${playerSelection} beats ${computerSelection}`;
    }
  }
  else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      scoreDiv.innerText = `You win the round! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection === 'paper') {
      scoreDiv.innerText = 'Tie. Pick a move again.';
    }
    else if (computerSelection === 'scissors') {
      scoreDiv.innerText = `You lose the round! ${computerSelection} beats ${playerSelection}`;
    }
  }
  else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      scoreDiv.innerText = `You lose the round! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection === 'paper') {
      scoreDiv.innerText = `You win the round! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection === 'scissors') {
      scoreDiv.innerText = 'Tie. Pick a move again.';
    }
  }
}
