var computerChoice = '';
function computerThink(){
  computerChoice = Math.floor(Math.random()*3);
  if (computerChoice === 1){
    computerChoice = "rock";
  }
  else if (computerChoice === 2){
    computerChoice = "paper";
  }
  else if (computerChoice === 3){
    computerChoice = "scissors";
  }
}
var userChoice = '';
function rockPick(){
  userChoice = "rock";
  computerThink();
  results();
}
function paperPick(){
  userChoice = "paper";
  computerThink();
  results();
}
function scissorsPick(){
  userChoice = "scissors";
  computerThink();
  results();
}

function results(){
  alert("You choose" + userChoice);
  alert("Computer choose" + ComputerChoice);
  compare(userChoice, computerChoice);
}

function compare(userChoice,computerChoice){
  if (userChoice === computerChoice){
    alert("It's a tie!");
  }
  else if(userChoice === rock){
    if(computerChoice === "scissors") {
  alert("You win!!");
}
    else {
      alert("You lose");
    }
  }
  else if (userChoice === paper){
    if (computerChoice === rock){
      alert("You win!!");
    }
    else {
      alert("You lose");
    }
  }
  else if(userChoice === scissors){
    if (computerChoice === paper){
      alert("You win!!");
    }
    else {
      alert("You lose");
    }
  }
}