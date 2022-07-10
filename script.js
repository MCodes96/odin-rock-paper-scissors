// Create function to make CPU opponent randomly choose Rock, Paper or Scissors.
function computerPlay() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
}

// Create function that takes Player and CPU Choice and plays a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelection = prompt(
    "Choose and type one: 'Rock', 'Paper' or 'Scissors'"
  ).toLowerCase();

  // Define Draw
  if (playerSelection === computerSelection) {
    return 'Draw!';
  }
  // Define Win cases for the player
  else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'Win!';
  }
  // Define Loss cases for the player
  else {
    return 'Loss!';
  }
}
