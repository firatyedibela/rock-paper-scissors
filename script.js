const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const roundWinnerDiv = document.querySelector('#round-winner');
const youText = document.querySelector('#you-text');
const scoreText = document.querySelector('#score-text');
const computerText = document.querySelector('#computer-text');
let youScoreDiv = document.querySelector('#you-score');
let computerScoreDiv = document.querySelector('#computer-score');
const youDiv = document.querySelector('#you');
const computerDiv = document.querySelector('#computer');
let youScore = 0;
let computerScore = 0;
let winner = document.querySelector('#winner');


rockBtn.addEventListener('click', (event) => {
  playRound(event.target.id);
});

paperBtn.addEventListener('click', (event) => {
  playRound(event.target.id);
});

scissorsBtn.addEventListener('click', (event) => {
  playRound(event.target.id);
});

function declareWinner() {
  if (youScore === 5) {
    console.log(`You won!\nYou: ${youScore}\nComputer: ${computerScore}`);
    winner.textContent = 'You Win!';
    youDiv.style.backgroundColor = 'Green';
    computerDiv.style.backgroundColor = 'Red';
    renderReplayButton();
    disableMoveButtons();
  }
  else if (computerScore === 5) {
    console.log(`You lose!\nYou: ${youScore}\nComputer: ${computerScore}`);
    winner.textContent = 'You Lose';
    youDiv.style.backgroundColor = 'Red';
    computerDiv.style.backgroundColor = 'Green'; 
    renderReplayButton();
    disableMoveButtons();
  } 
}; 

function resetScores() {
  youScore = 0;
  computerScore = 0;
  roundWinnerDiv.textContent = ''; 
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
      youScore++;
    }
  }
  else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      roundWinnerDiv.innerText = `You win the round! ${playerSelection} beats ${computerSelection}`;
      youScore++;
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
      youScore++;
    }
    else if (computerSelection === 'scissors') {
      roundWinnerDiv.innerText = 'Tie. Pick a move again.';
    }
  }
  renderScores();
  declareWinner();
}

function renderScores() {
  youScoreDiv.textContent = youScore;
  computerScoreDiv.textContent = computerScore;
};

function renderReplayButton() {
  const replayButton = document.createElement('button');
  replayButton.textContent = 'Play Again';
  replayButton.id = 'replay-button';

  replayButton.addEventListener('click', () => {
    enableMoveButtons();
    resetScores();
    renderScores();
    winner.innerText = '';
    youDiv.style.backgroundColor = 'Black';
    computerDiv.style.backgroundColor = 'Black'; 
    replayButton.remove();
  });

  document.querySelector('#replay-wrapper')
    .appendChild(replayButton);
}

function disableMoveButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

function enableMoveButtons() {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

