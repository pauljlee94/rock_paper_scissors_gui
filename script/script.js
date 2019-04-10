let counter = 0
let playerScore = 0;
let computerScore = 0;
const playerScoreBoard = document.querySelector('.playerScore')
const computerScoreBoard = document.querySelector('.computerScore')

function computerPlay() {
    let choices = ['rock','paper','scissors']
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        (computerSelection == "rock") ? result = "T" : 
        (computerSelection == "paper") ? computerScore++ :
        playerScore++
    }else if (playerSelection == "paper") {
        (computerSelection == "rock") ? playerScore++ : 
        (computerSelection == "paper") ? result = "T" :
        computerScore++
    }else if (playerSelection == "scissors") {
        (computerSelection == "rock") ? computerScore++ : 
        (computerSelection == "paper") ? result = "T" :
        playerScore++
    }   
}

// Score Section
function game () {
    if (playerScore < 5 && computerScore < 5) {
        playerScoreBoard.textContent = playerScore.toString()
        computerScoreBoard.textContent = computerScore.toString()

    }else if (playerScore == 5) {
        playerScoreBoard.textContent = playerScore.toString()
        
    }else if (computerScore == 5) {
        computerScoreBoard.textContent = computerScore.toString()
        
    }
}

function reset () {
    playerScore = 0;
    computerScore = 0;
    playerScoreBoard.textContent = 0
    computerScoreBoard.textContent = 0
}
// Choice Buttons
const rockButton = document.querySelector('#rockButton')
rockButton.addEventListener('click', function(){
    playRound('rock', computerPlay());
    game();
});

const paperButton = document.querySelector('#paperButton')
paperButton.addEventListener('click', function(){
    playRound('paper', computerPlay());
});

const scissorsButton = document.querySelector('#scissorsButton')
scissorsButton.addEventListener('click', function(){
    playRound('scissors', computerPlay());
});

const resetButton = document.querySelector('.resetButton')
resetButton.addEventListener('click', function() {
    reset();

});