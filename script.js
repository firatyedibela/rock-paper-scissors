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

function playGame() {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    let result = 0;
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    result =  playRound(playerChoice, computerChoice);

    if (result === 0) {
      computerScore++;
    }
    else {
      playerScore++;
    }

    console.log(`You ${playerScore} - ${computerScore} Computer`);
  }

  // Declare final scores, compare scores and declare winner
  console.log(`###FINAL SCORE###
  You: ${playerScore}
  Computer: ${computerScore}
  `);

  if (computerScore > playerScore) {
    console.log('You Lose! Try again.');
  }
  else {
    console.log('You win! Congratulations!');
  }

}

playGame();