function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}


function getUserChoice(roundNumber) {
    return prompt(`Welcome to the game of Rock, Paper and Scissors!\nROUND ${roundNumber} \nEnter Rock, Paper or Scissors:- `);
}

function capitalize(word) {
    word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}

let userScore = 0;
let computerScore = 0;
let roundNumber = 1;

function playRound(userChoice, computerChoice) {

    if (userChoice==computerChoice) {
        alert(`Tie! Both chose ${userChoice}.\nUser: ${userScore} & Computer: ${computerScore}`);
    } else if (
        (userChoice == "Rock" && computerChoice == "Paper") ||
        (userChoice == "Paper" && computerChoice == "Scissors") ||
        (userChoice == "Scissors" && computerChoice == "Rock")
    ) {
        computerScore++;
        alert(`You Lose! ${computerChoice} beats ${userChoice}.\nUser: ${userScore} & Computer: ${computerScore}`);
        
    } else if (
        (userChoice == "Rock" && computerChoice == "Scissors") ||
        (userChoice == "Paper" && computerChoice == "Rock") ||
        (userChoice == "Scissors" && computerChoice == "Paper")
    ) {
        userScore++;
        alert(`You Win! ${userChoice} beats ${computerChoice}.\nUser: ${userScore} & Computer: ${computerScore}`);
    } else {
        alert("Invalid Choice");
    }
}

function playGame() {
    for (let i=0; i<5; i++) {
        playRound(capitalize(getUserChoice(roundNumber)), getComputerChoice());
        roundNumber++;
    }
}


playGame();
alert(`FINAL SCORE:\nUser: ${userScore}\nComputer: ${computerScore}`);

console.log("Code executed Successfully.")