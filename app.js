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

function rockPick(){
  choice1 = "rock";
  computerThink();
  results();
}
function paperPick(){
  choice1 = "paper";
  computerThink();
  results();
}
function scissorsPick(){
  choice1 = "scissors";
  computerThink();
  results();
}

function results(){
  alert("You choose" + userChoice);
  alert("Computer choose" + ComputerChoice);
  compare(userChoice, computerChoice);
}

function compare(choice1,choice2){
  if (choice1 === choice2){
    alert("It's a tie!");
  }
  else if(choice1 === rock){
    if(choice2 === "scissors") {
  alert("You win!!");
}
    else {
      alert("You lose");
    }
  }
  else if (choice1 === paper){
    if (choice2 === rock){
      alert("You win!!");
    }
    else {
      alert("You lose");
    }
  }

}