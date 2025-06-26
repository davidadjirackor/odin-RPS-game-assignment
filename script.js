let humanScore = 0;
let computerScore = 0;

const resultText = document.getElementById("resultText");
const scoreText = document.getElementById("scoreText");

// Generate computer's choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";
  return "scissors";
}

// Play one round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${capitalize(humanChoice)} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${capitalize(computerChoice)} beats ${humanChoice}`;
  }
}

// Capitalize function
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

// Handle button clicks
function handleClick(e) {
  if (humanScore >= 5 || computerScore >= 5) return;

  const humanChoice = e.target.dataset.choice;
  const computerChoice = getComputerChoice();
  const roundResult = playRound(humanChoice, computerChoice);

  resultText.textContent = roundResult;
  scoreText.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore > computerScore ? "🎉 You won the game!" : "😞 You lost the game!";
    resultText.textContent += ` ${winner}`;
  }
}

// Add event listeners to buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", handleClick);
});