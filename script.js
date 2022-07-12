// Function to make CPU opponent randomly choose Rock, Paper or Scissors.
function computerPlay() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function letPlayerSelect() {
  let playerSelection = prompt(
    "Choose and type one: 'Rock', 'Paper' or 'Scissors'"
  );
  // Validation of Input
  if (playerSelection === null) {
    return 'Cancelled!';
  }
  playerSelection = playerSelection.toLowerCase();
  while (
    playerSelection !== 'rock' &&
    playerSelection !== 'paper' &&
    playerSelection !== 'scissors' &&
    playerSelection !== null
  ) {
    playerSelection = prompt(
      "Choose and type one: 'Rock', 'Paper' or 'Scissors'"
    );
    if (playerSelection === null) {
      return 'Cancelled!';
    }
    playerSelection = playerSelection.toLowerCase();
  }
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = letPlayerSelect();
  if (playerSelection === 'Cancelled!') return 'Cancelled!';

  if (playerSelection === computerSelection) {
    console.log('Draw!');
    return 'Draw!';
  }
  // Win cases for the player
  else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log('Win!');
    return 'Win!';
  } else {
    console.log('Loss!');
    return 'Loss!';
  }
}

// Main Game function
function game() {
  let playerScore = 0,
    cpuScore = 0,
    gameCount = 0;

  // Play 5 rounds of RPS
  while (gameCount < 5) {
    gameCount++;
    let currentRound = playRound();
    // Cancel game when player cancels prompt
    if (currentRound === 'Cancelled!') {
      console.log('Player cancelled the game.');
      return 'Game cancelled!';
    }
    // Add scores depending on winner of currentRound
    else if (currentRound === 'Win!') playerScore++;
    else if (currentRound === 'Loss!') cpuScore++;
    // Log current score to the console
    console.log(`Player - CPU
        ${playerScore} - ${cpuScore}`);
  }
  // Define Win, Loss and Draw and log final score to the console
  if (playerScore === cpuScore) console.log('Draw!');
  else if (playerScore > cpuScore) console.log('Player wins!');
  else console.log('CPU wins!');
}
