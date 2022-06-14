//Start with getting input from the user for thier play (convert the input into lowercase)

//then get a random number between 1-3, 1 - rock, 2 - paper, 3 - scissors

//then compare the strings to determine whos the winner

let playerScore = 0;
let computerScore = 0;
let computerHand = "rock";
let matchWinner = "";

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



  let computerInput = getComputerInput(matchWinner,userInput, computerHand);

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

  } else if (computerInput == "rock" && userInput == "scissors"){

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

}


function getComputerInput(winner, handPlayed, computerHandPlayed) {

    let computerChoice;

    if(playerScore === 0 && computerScore === 0)
    {
        computerChoice = "rock";
        return computerChoice;
    }

    if(winner == "player")
    {
        if(handPlayed == "rock")
        {
            computerChoice = "paper";
        } else if (handPlayed == "scissors") {
            computerChoice = "rock";
        } else {
            computerChoice = "scissors";
        }

    } else {

        if(computerHandPlayed == "rock")
        {
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

