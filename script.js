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
  );
  // Define output of player exiting prompt
  if (playerSelection === null) {
    return 'Cancelled!';
  }
  playerSelection = playerSelection.toLowerCase();
  // Validate player input, if not valid present another prompt
  while (
    playerSelection !== 'rock' &&
    playerSelection !== 'paper' &&
    playerSelection !== 'scissors'
  ) {
    playerSelection = prompt(
      "Choose and type one: 'Rock', 'Paper' or 'Scissors'"
    );
    // Define output of player exiting prompt
    if (playerSelection === null) {
      return 'Cancelled!';
    }
    playerSelection = playerSelection.toLowerCase();
  }
  // Define output of player exiting prompt
  if (playerSelection === null) {
    return 'Cancelled!';
  }
  // Define Draw
  else if (playerSelection === computerSelection) {
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

function game() {
  // Define scores
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
