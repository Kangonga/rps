const selections = ['rock','paper','scissors']
let playerScore = 0;
let compScore = 0;
let tie = 0
let getComputerChoice = function() {
  let randomNum = Math.floor(Math.random() * 3)
  const options = ['rock','paper','scissors']
  let compChoice = options[randomNum]
  return (compChoice)
}
//  console.log(getComputerChoice())

let getPlayerChoice = function(){
  let playerChoice = prompt("Enter a choice : Options are Rock, Paper, Scissors")
  playerChoice = playerChoice.toLowerCase()

  if(!(selections.includes(playerChoice))){
      alert("Enter a valid choice")
  }
  else{
  return(playerChoice)
  }
}

let playOnce = function(playerSelection, computerSelection){
  playerSelection = getPlayerChoice()
  computerSelection = getComputerChoice()
  if(playerSelection == computerSelection) {
    alert("TIE!")
    tie+=1;
  }
  else if(playerSelection=='rock' && computerSelection=='scissors'
  || playerSelection == 'paper' && computerSelection== 'rock'
  || playerSelection == 'scissors' && computerSelection== 'paper'
  ){
    alert(`Player wins! \n ${playerSelection} beats ${computerSelection}`)
    playerScore += 1;
  }

  else if (playerSelection=='paper' && computerSelection=='scissors'
  || playerSelection == 'scissors' && computerSelection== 'rock'
  || playerSelection == 'rock' && computerSelection== 'paper'
  ){
    compScore +=1
    alert(`Computer wins! \n ${computerSelection} beats ${playerSelection}`)
  }
}

let game = function(){
for(let i=0;i<5;i++){
  playOnce()
}
alert(`Computer ${compScore} : Player ${playerScore} : tie ${tie}`)
if (compScore > playerScore) {
  return ("computer wins")
}
else {
  return("player wins")
}
}

console.log(game())