const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const roundWinnerDiv = document.querySelector('#round-winner');
const scoreDiv = document.querySelector('#score');
let playerScore = 0;
let computerScore = 0;

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
      roundWinnerDiv.innerText = 'Tie. Pick a move again.';
    }
    else if (computerSelection === 'paper') {
      roundWinnerDiv.innerText = `You lose the round! ${computerSelection} beats ${playerSelection}`;
      computerScore++;     
    }
    else if (computerSelection === 'scissors') {
      roundWinnerDiv.innerText = `You win the round! ${playerSelection} beats ${computerSelection}`;
      playerScore++;
    }
  }
  else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      roundWinnerDiv.innerText = `You win the round! ${playerSelection} beats ${computerSelection}`;
      playerScore++;
    }
    else if (computerSelection === 'paper') {
      roundWinnerDiv.innerText = 'Tie. Pick a move again.';
    }
    else if (computerSelection === 'scissors') {
      roundWinnerDiv.innerText = `You lose the round! ${computerSelection} beats ${playerSelection}`;
      computerScore++;
    }
  }
  else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      roundWinnerDiv.innerText = `You lose the round! ${computerSelection} beats ${playerSelection}`;
      computerScore++;
    }
    else if (computerSelection === 'paper') {
      roundWinnerDiv.innerText = `You win the round! ${playerSelection} beats ${computerSelection}`;
      playerScore++;
    }
    else if (computerSelection === 'scissors') {
      roundWinnerDiv.innerText = 'Tie. Pick a move again.';
    }
  }
  scoreDiv.innerText = `You ${playerScore} - ${computerScore} Computer`;
}
