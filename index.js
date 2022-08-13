//declare useful variables
let playerScore = 0;
let compScore = 0;
let tie = 0
let results = document.getElementById('results')


// function that takes in user selections from the buttons, and calls the play function
let select = function(text){
  playOnce(text.toLowerCase())
}


//function that selects the buttons, checks which one has been clicked, gets its textContent and calls the select function
let playerChoice = function(){
  let choice = document.getElementsByClassName('clicks')
  let choices = Array.from(choice)
  let a;

  for (let ch of choices){
    ch.addEventListener('click',function(){
      a = ch.innerText
      select(a)
    })
  }

}

// Function that plays a game once. Takes in two parameters. 
// The second parameter will be given by default from the function that gets the computer choice
// The first parameter will be passed on function call

let playOnce = function(playerSelection, computerSelection=getComputerChoice()){
  if(playerSelection == computerSelection) {
    tie+=1; 
    results.innerText=`TIE!\nPlayer Score: ${playerScore} \nComputer Score ${compScore} \n Ties : ${tie}`
    
  }
  else if(playerSelection=='rock' && computerSelection=='scissors'
  || playerSelection == 'paper' && computerSelection== 'rock'
  || playerSelection == 'scissors' && computerSelection== 'paper'
  ){
    playerScore += 1;
    results.innerText=`Player wins! \n ${playerSelection} beats ${computerSelection}. \nPlayer Score: ${playerScore} \nComputer Score ${compScore}\n Ties : ${tie}`
    
  }

  else if (playerSelection=='paper' && computerSelection=='scissors'
  || playerSelection == 'scissors' && computerSelection== 'rock'
  || playerSelection == 'rock' && computerSelection== 'paper'
  ){
    compScore +=1
    results.innerText=`Computer wins! \n ${computerSelection} beats ${playerSelection}\nPlayer Score: ${playerScore} \nComputer Score ${compScore} \n Ties : ${tie}`
  }
}



//generate random computer choices
let getComputerChoice = function() {
  let randomNum = Math.floor(Math.random() * 3)
  const options = ['rock','paper','scissors']
  let compChoice = options[randomNum]
  return (compChoice)
}


playerChoice()