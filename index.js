let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const options = {
    1: "rock",
    2: "paper",
    3: "scissors",
  };
  const randomNumber = Math.round(Math.random() * (3 - 1) + 1).toString();
  return options[randomNumber];
};

const playRound = (computerChoice, humanChoice) => {
  const computerChoiceDisplay = document.querySelector(
    ".computer-choice-display"
  );
  const humanChoiceDisplay = document.querySelector(".human-choice-display");

  computerChoiceDisplay.textContent = computerChoice;
  humanChoiceDisplay.textContent = humanChoice;

  let roundWinner = "";
  if (humanChoice === "rock") {
    if (computerChoice === "rock") roundWinner = "tie";
    if (computerChoice === "paper") roundWinner = "computer";
    if (computerChoice === "scissors") roundWinner = "human";
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") roundWinner = "human";
    if (computerChoice === "paper") roundWinner = "tie";
    if (computerChoice === "scissors") roundWinner = "computer";
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") roundWinner = "computer";
    if (computerChoice === "paper") roundWinner = "human";
    if (computerChoice === "scissors") roundWinner = "tie";
  } else roundWinner = "invalid";

  if (roundWinner === "tie") alert("It's a tie");
  if (roundWinner === "computer") {
    computerScore += 1;
    alert("The winner is the computer");
  }
  if (roundWinner === "human") {
    humanScore += 1;
    alert("You are the winner");
  }
  const computerScoreDisplay = document.querySelector(".computer-score");
  const humanScoreDisplay = document.querySelector(".human-score");

  computerScoreDisplay.textContent = computerScore;
  humanScoreDisplay.textContent = humanScore;
};

const resetScores = () => {
  humanScore = 0;
  computerScore = 0;
};

const playGame = () => {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      alert("YOU WIN THE GAME YEAHHHHH!!!!");
      resetScores();
    }
    if (humanScore < computerScore) {
      alert("YOU LOSE BUUUUUU!!!!!");
      resetScores();
    }
  }
};

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

rockButton.addEventListener("click", (e) => {
  const humanChoice = e.target.value;
  const computerChoice = getComputerChoice();
  playRound(computerChoice, humanChoice);
  playGame();
});

paperButton.addEventListener("click", (e) => {
  const humanChoice = e.target.value;
  const computerChoice = getComputerChoice();
  playRound(computerChoice, humanChoice);
  playGame();
});

scissorsButton.addEventListener("click", (e) => {
  const humanChoice = e.target.value;
  const computerChoice = getComputerChoice();
  playRound(computerChoice, humanChoice);
  playGame();
});
