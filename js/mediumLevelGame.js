//Start with getting input from the user for thier play (convert the input into lowercase)

//then get a random number between 1-3, 1 - rock, 2 - paper, 3 - scissors

//then compare the strings to determine whos the winner

let playerScore = 0;
let computerScore = 0;


let playerScoreText = document.querySelector(".player>.wins");
let computerScoreText = document.querySelector(".computer>.wins");
let message = document.querySelector(".game-updates");


main();

function main() {
  //get user input


  const gameOptions = document.querySelectorAll('.image-animation');
  
  gameOptions.forEach((gameOption) =>
  {
    gameOption.addEventListener("click", () => {

      if(playerScore !== 5 && computerScore !== 5)
      {
        playGame(gameOption.id);
      } else {
        //bring to new page
        return;
      }
    });
  }
  ) 
  
}

function playGame(userInput)
{
  let computerInput = getComputerInput();

 // console.log(userInput);

  let matchResult;
  //game logic
  if (userInput == computerInput) {

    matchResult = "Tie";

  } else if (userInput == "rock" && computerInput == "scissors") {

    matchResult = "Rock beats Scissors, Player wins";
    playerScore++;
    playerScoreText.textContent = playerScore;

  } else if (userInput == "paper" && computerInput == "rock") {

    matchResult = "Paper beats Rock, Player wins";
    playerScore++;
    playerScoreText.textContent = playerScore;

  } else if (userInput == "scissors" && computerInput == "paper") {

    matchResult = "Scissors beats Paper, Player wins";
    playerScore++;
    playerScoreText.textContent = playerScore;

  } else if (computerInput == "rock" && userInput == "scissors"){

    matchResult = "Rock beats Scissors, Computer wins";
    computerScore++;
    computerScoreText.textContent = computerScore;
  
  } else if (computerInput == "paper" && userInput == "rock") {
    
    matchResult = "Paper beats Rock, Computer wins";
    computerScore++;
    computerScoreText.textContent = computerScore;

  } else if (computerInput == "scissors" && userInput == "paper") {
    matchResult = "Scissor beats rock, Computer wins";
    computerScore++;
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

  playAgain.href = "mediumLevel.html";
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




function getComputerInput() {
  //random number between 1-3
  const num = randomNumberGenerator(1, 3);
  let choice;

  if (num == 1) {
    choice = "rock";
  } else if (num == 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
}

function randomNumberGenerator(minNum, maxNum) {
  return Math.round(Math.random() * (maxNum - minNum)) + minNum;
}
