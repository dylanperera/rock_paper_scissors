//Start with getting input from the user for thier play (convert the input into lowercase)

//then get a random number between 1-3, 1 - rock, 2 - paper, 3 - scissors

//then compare the strings to determine whos the winner

let playerScore = 0;
let computerScore = 0;
let computerHand = "rock";
let matchWinner = "";

let body = document.querySelector("body");
let playerScoreText = document.querySelector(".player>.wins");
let computerScoreText = document.querySelector(".computer>.wins");
let message = document.querySelector(".game-updates");

main();

function main() {
  //get user input

  const gameOptions = document.querySelectorAll(".image-animation");

  gameOptions.forEach((gameOption) => {
    gameOption.addEventListener("click", () => {
      if (playerScore !== 5 && computerScore !== 5) {
        playGame(gameOption.id);
      } else {
        return;
      }
    });
  });
}

function createModal(input) {
  //darken screen

  //popup
  let modal = document.createElement("div");
  let text = document.createElement("div");
  let optionsContainer = document.createElement("div");
  let playAgain = document.createElement("a");
  let menu = document.createElement("a");

  modal.classList.add('modal');

  text.classList.add("modal-text");
  text.textContent = input;

  
  optionsContainer.classList.add("modal-options");

  playAgain.href = "hardLevelGame.html";
  let linkToPlay = document.createElement('button');
  linkToPlay.textContent = "Play Again!";
  playAgain.appendChild(linkToPlay);

  menu.href = "../index.html";
  let linkToMenu = document.createElement('button');
  linkToMenu.textContent = "Menu!";
  menu.appendChild(linkToMenu);
  
  optionsContainer.appendChild(playAgain);
  optionsContainer.appendChild(menu);

  modal.appendChild(text);
  modal.appendChild(optionsContainer);

  let content = document.querySelector(".Content");
  content.removeChild(rock);
  content.removeChild(paper);
  content.removeChild(scissors);

  content.appendChild(modal);

}

function playGame(userInput) {
  let computerInput = getComputerInput(matchWinner, userInput, computerHand);

  // console.log(userInput);

  let matchResult;
  //game logic
  if (userInput == computerInput) {
    matchResult = "Tie";
    matchWinner = "Tie";
  } else if (userInput == "rock" && computerInput == "scissors") {
    matchResult = "Rock beats Scissors, Player wins";
    playerScore++;
    matchWinner = "player";
    playerScoreText.textContent = playerScore;
  } else if (userInput == "paper" && computerInput == "rock") {
    matchResult = "Paper beats Rock, Player wins";
    playerScore++;
    matchWinner = "player";
    playerScoreText.textContent = playerScore;
  } else if (userInput == "scissors" && computerInput == "paper") {
    matchResult = "Scissors beats Paper, Player wins";
    playerScore++;
    matchWinner = "player";
    playerScoreText.textContent = playerScore;
  } else if (computerInput == "rock" && userInput == "scissors") {
    matchResult = "Rock beats Scissors, Computer wins";
    computerScore++;
    matchWinner = "computer";
    computerScoreText.textContent = computerScore;
  } else if (computerInput == "paper" && userInput == "rock") {
    matchResult = "Paper beats Rock, Computer wins";
    computerScore++;
    matchWinner = "computer";
    computerScoreText.textContent = computerScore;
  } else if (computerInput == "scissors" && userInput == "paper") {
    matchResult = "Scissor beats rock, Computer wins";
    computerScore++;
    matchWinner = "computer";
    computerScoreText.textContent = computerScore;
  }

  message.textContent = matchResult;

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore == 5) {
      createModal("You Won!");
    } else {
        createModal("You Lost!");
    }
  }
}

function getComputerInput(winner, handPlayed, computerHandPlayed) {
  let computerChoice;

  if (playerScore === 0 && computerScore === 0) {
    computerChoice = "rock";
    return computerChoice;
  }

  if (winner == "player") {
    if (handPlayed == "rock") {
      computerChoice = "paper";
    } else if (handPlayed == "scissors") {
      computerChoice = "rock";
    } else {
      computerChoice = "scissors";
    }
  } else {
    if (computerHandPlayed == "rock") {
      computerChoice = "paper";
    } else if (computerHandPlayed == "scissors") {
      computerChoice = "rock";
    } else {
      computerChoice = "scissors";
    }
  }

  computerHand = computerChoice;
  return computerChoice;
}
