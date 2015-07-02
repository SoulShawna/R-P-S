function computerThink(){
  computerChoice = Math.floor(Math.random()*3);
    if (computerChoice == 1){
    computerChoice = "rock";
  }
  else if (computerChoice == 2){
    computerChoice = "paper";
  }
  else if (computerChoice == 3){
    computerChoice = "scissors";
  }
  return;
}
var userChoice = '';

function rockPick(){
  userChoice = "rock";
  computerThink();
  results();
  return;
}
function paperPick(){
  userChoice = "paper";
  computerThink();
  results();
  return;
}
function scissorsPick(){
  userChoice = "scissors";
  computerThink();
  results();
  return;
}

function results(){
  alert("You choose " + userChoice);
  alert("Computer choose " + ComputerChoice);
  compare(userChoice, computerChoice);
  return;
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
    return;
  }
  else if (userChoice === paper){
    if (computerChoice === rock){
      alert("You win!!");
    }
    else {
      alert("You lose");
    }
    return;
  }
  else if(userChoice === scissors){
    if (computerChoice === paper){
      alert("You win!!");
    }
    else {
      alert("You lose");
    }
    return;
  }
}