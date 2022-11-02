const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const divAnswers = document.querySelector(".answers");
let machineCount = 0, humanCount = 0, ties = 0;

rock.addEventListener("click", () => {
  console.log(game("rock"));
});

paper.addEventListener("click", () => {
  console.log(game("paper"));
});

scissors.addEventListener("click", () => {
  console.log(game("scissors"));
});

const computerPlay = () => {
  let computerChoice = Math.floor(Math.random() * 3); 

  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
    default:
      console.log("Not today gamer");
  }

  return computerChoice;
};

const updateUI = (compSelection, humanSelection, result) => {
  let textContent = '';

  if (result === "Machine") machineCount++;
  else if (result == "Human Player") humanCount++;
  else ++ties;

  textContent = `
    <p>Computer: ${compSelection}</p>
    <p>Human: ${humanSelection}</p>
    <p>Winner: ${result}</p>
    <p>Human Player Wins: ${humanCount}</p>
    <p>Machine Wins: ${machineCount}</p>
    <p>Ties in Game: ${ties}</p>

  `;

  divAnswers.innerHTML = textContent;

  if( humanCount >= 5 || machineCount >= 5) {
    const winText = (humanCount > machineCount)? 'Won by human': 'Won by machine';
    humanCount = 0;
    machineCount = 0;
    ties = 0;
    alert(winText);
  }
};

const playRound = (computerSelection, playerSelection) => {

  let outcome;
  if (computerSelection === "paper" && playerSelection === "rock") {
    outcome = "Machine";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    outcome = "Human Player";
  }
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    outcome = "Machine";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    outcome = "Human Player";
  }
  else if (computerSelection === "scissors" && playerSelection === "paper") {
    outcome = "Machine";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    outcome = "Human Player";
  }
  else {
    outcome =
      "Tie";
  }

  updateUI(computerSelection, playerSelection, outcome);

  return outcome;
};

const game = (playerChoice) => {
  const computerSelection = computerPlay();

  const winner = playRound(computerSelection, playerChoice);
  if (winner === "Human Player") return "Human won";
  else if (winner === "Machine") return "Machine Won";
  else return "Tie";
};