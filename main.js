//Start with getting input from the user for thier play (convert the input into lowercase)

//then get a random number between 1-3, 1 - rock, 2 - paper, 3 - scissors

//then compare the strings to determine whos the winner

let game = main();
console.log(game);

function main() {
  //get user input
  let userInput;
  let keepPrompting = true;

  do {
    userInput = prompt("Rock, Paper, or Scissors?");
    userInput = userInput.toLowerCase();
    userInput = userInput.replace(
      userInput.charAt(0),
      userInput.charAt(0).toUpperCase()
    );

    if(userInput === "Rock" || userInput === "Paper" || userInput === "Scissors")
    {
        keepPrompting = false;
    }
  } while (keepPrompting === true)

  // let userInput = prompt("Rock, Paper, or Scissors?");
  let computerInput = getComputerInput();
  console.log(computerInput);

  let matchResult;
  //game logic
  if (userInput == computerInput) {
    matchResult = "Tie";
  } else if (
    (userInput == "Rock" && computerInput == "Scissors") ||
    (userInput == "Paper" && computerInput == "Rock") ||
    (computerInput == "Scissors" && computerInput == "Paper")
  ) {
    matchResult = "Player wins";
  } else {
    matchResult = "Computer wins";
  }
  return matchResult;
}

function getComputerInput() {
  //random number between 1-3
  const num = randomNumberGenerator(1, 3);
  let choice;

  if (num == 1) {
    choice = "Rock";
  } else if (num == 2) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }

  return choice;
}

function randomNumberGenerator(minNum, maxNum) {
  return Math.round(Math.random() * (maxNum - minNum)) + minNum;
}
