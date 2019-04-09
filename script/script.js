// function playerPlay() {
//     let input = prompt("Rock, paper, or scissors?")
//     return input.toLowerCase()
// }

function computerPlay() {
    let choices = ['rock','paper','scissors']
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let result
    if (playerSelection == "rock") {
        (computerSelection == "rock") ? result = "T" : 
        (computerSelection == "paper") ? result = "L" :
        result = "W"
    }   else if (playerSelection == "paper") {
        (computerSelection == "rock") ? result = "W" : 
        (computerSelection == "paper") ? result = "T" :
        result = "L"
    }   else if (playerSelection == "scissors") {
        (computerSelection == "rock") ? result = "L" : 
        (computerSelection == "paper") ? result = "T" :
        result = "W"
    }   else {
        result = "undefined"
        }
    return result
}

// function game () {
//     let counter = 0
//     let playerScore = 0;
//     let computerScore = 0;
//     while (counter < 5) {
//         let result = playRound(playerPlay(), computerPlay())
//         if (result == "W") {
//             playerScore++
//             alert("You:" + playerScore + "\n"  + "Computer:" + computerScore)
//             counter++
//         }   else if (result == "L") {
//             computerScore++
//             alert("You:" + playerScore + "\n" + "Computer:" + computerScore)
//             counter++
//         }   else if (result == "T"){
//             alert("Tie")
//             counter++
//         }   else {
//             alert("Invalid entry")
//         }

//     }
//     if (playerScore > computerScore) {
//         alert("You win!!")
//     }   else if (playerScore < computerScore) {
//         alert("You lose :(")
//     }   else {
//         alert("Tie")
//     }
//     alert("You:" + playerScore + "\n" + "Computer:" + computerScore)
// }


// game()

const rockButton = document.querySelector('#rockButton')
rockButton.addEventListener('click', playRound("rock", computerPlay))

const paperButton = document.querySelector('#paperButton')
paperButton.addEventListener('click', function(e) {
    console.log(e)
})

const scissorsButton = document.querySelector('#scissorsButton')
scissorsButton.addEventListener('click', function(e) {
    console.log(e)
})