function computerThink(){
  computerChoice = Math.floor(Math.Random()*3);
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