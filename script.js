function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let buttons = document.querySelector('.buttons')
buttons.addEventListener("click", function startRound(event){
    playRound(event.target.id, getComputerChoice(), endGame)
})
let roundResultDiv = document.querySelector('.round-result')
let result = document.createElement('p')
let finalResultDiv = document.querySelector('.final-result')
let restartContainer = document.querySelector('.restart-container')


let userScore = 0;
let computerScore = 0;

function endGame(winner) {
    buttons.remove( )
    let winnerDeclare = document.createElement("h2")
    let restart = document.createElement("button")

    winnerDeclare.innerHTML = `🏆 5 Rounds completed!<br>Winner: ${winner}! 🎉`
    restart.textContent = "Restart Game"
    restart.addEventListener("click", () => {
        location.reload()
    })
    
    // Show final result and add appropriate class based on winner
    finalResultDiv.classList.add('active');
    if (winner === "User") {
        finalResultDiv.classList.add('user-winner');
    } else {
        finalResultDiv.classList.add('computer-winner');
    }
    
    // Add winner declaration to the colored box
    finalResultDiv.appendChild(winnerDeclare)
    
    // Add restart button outside the colored box
    restartContainer.appendChild(restart)
}

function playRound(userChoice, computerChoice, endGame) {
    // Clear previous animations and show round result
    roundResultDiv.className = 'round-result active';
    
    if (userChoice==computerChoice) {
        result.innerHTML= `Tie! Both chose ${userChoice}.<br>User: ${userScore} & Computer: ${computerScore}`;
        roundResultDiv.classList.add('tie');
    } else if (
        (userChoice == "rock" && computerChoice == "paper") ||
        (userChoice == "paper" && computerChoice == "scissors") ||
        (userChoice == "scissors" && computerChoice == "rock")
    ) {
        computerScore++;
        result.innerHTML= `You Lose! ${computerChoice} beats ${userChoice}.<br>User: ${userScore} & Computer: ${computerScore}`;
        roundResultDiv.classList.add('lose');
        
    } else if (
        (userChoice == "rock" && computerChoice == "scissors") ||
        (userChoice == "paper" && computerChoice == "rock") ||
        (userChoice == "scissors" && computerChoice == "paper")
    ) {
        userScore++;
        result.innerHTML=`You Win! ${userChoice} beats ${computerChoice}.<br>User: ${userScore} & Computer: ${computerScore}`;
        roundResultDiv.classList.add('win');
    }
    roundResultDiv.appendChild(result)
    if (userScore===5) endGame("User")
    else if (computerScore===5) endGame("Computer")
}

console.log("Code executed Successfully.")