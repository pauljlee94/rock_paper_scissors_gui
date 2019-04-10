//-----------------------//
//                       //
//  Rock,Paper,Scissors  //
//                       //
//       Paul Lee        //
//                       //
//-----------------------//

let counter = 0
let playerScore = 0;
let computerScore = 0;
let gameOver = false;
let result = ''
// const scoreDiv = document.querySelector('.scores');
// const outcome = document.createElement('h1')
// outcome.classList.add("outcome")
// outcome.textContent = "BLAH"
const playerScoreBoard = document.querySelector('.playerScore');
const computerScoreBoard = document.querySelector('.computerScore');
const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const resetButton = document.querySelector('.resetButton');

if (playerScore > computerScore) {
    result = "You Win"
}else {
    result = "You Lose"
}

// Computer Choice---------------------------------------------------
function computerPlay() {
    let choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

// Round-------------------------------------------------------------
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        (computerSelection == "rock") ? result = "T" : 
        (computerSelection == "paper") ? computerScore++ :
        playerScore++;
    }else if (playerSelection == "paper") {
        (computerSelection == "rock") ? playerScore++ : 
        (computerSelection == "paper") ? result = "T" :
        computerScore++;
    }else if (playerSelection == "scissors") {
        (computerSelection == "rock") ? computerScore++ : 
        (computerSelection == "paper") ? result = "T" :
        playerScore++;
    }
}

// Score Tally-------------------------------------------------------
function game () {
    if (playerScore < 5 && computerScore < 5) {
        playerScoreBoard.textContent = playerScore.toString();
        computerScoreBoard.textContent = computerScore.toString();
    }else if (playerScore == 5 || computerScore ==5) {
        if (playerScore > computerScore) {
            computerScoreBoard.textContent = '';
            playerScoreBoard.textContent = " You Win"
        }else {
            computerScoreBoard.textContent = '';
            playerScoreBoard.textContent = "You Lose"
        }
        gameOver = true;
    }
}

// Reset Function----------------------------------------------------
function reset () {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    playerScoreBoard.textContent = 0;
    computerScoreBoard.textContent = "0";
}

// Choice Buttons----------------------------------------------------
rockButton.addEventListener('click', function(){
    if (gameOver == false) {
    playRound('rock', computerPlay());
    game();
    }
})

paperButton.addEventListener('click', function(){
    if (gameOver == false) {
    playRound('paper', computerPlay());
    game();
    }
})

scissorsButton.addEventListener('click', function(){
    if (gameOver == false) {
    playRound('scissors', computerPlay());
    game();
    }
})

// Reset Button------------------------------------------------------
resetButton.addEventListener('click', function() {
    reset();
})