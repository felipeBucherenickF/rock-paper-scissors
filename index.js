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

const getHumanChoice = () => {
  const options = ["rock", "paper", "scissors"];
  let humanChoice = window.prompt();
  while (!options.includes(humanChoice.toLowerCase())) {
    alert("It's not a valid option: Must be 'Rock', 'Paper' or 'Scissors'");
    humanChoice = window.prompt();
  }
  return humanChoice.toLowerCase();
};

const playRound = (computerChoice, humanChoice) => {
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
};

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
  }
  if (humanScore > computerScore) alert("YOU WIN THE GAME YEAHHHHH!!!!");
  if (humanScore < computerScore) alert("YOU LOSE BUUUUUU!!!!!");
  if (humanScore === computerScore) alert("IT'S A TIE");
  console.log(computerScore);
  console.log(humanScore);
};

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

rockButton.addEventListener("click", (e) => {
  console.log(e.target.value);
});
