let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let odds = Math.floor(Math.random() * 100) + 1;
    console.log(odds);

    if (odds <= 33) {
        console.log("rock");
        return "rock";
    } else if (odds > 33 && odds <= 66) {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissors");
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`You play ${humanChoice}.`);

    if (humanChoice === computerChoice) {
        console.log(`Computer plays ${computerChoice}.`);
        console.log("It's a draw!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`Computer plays ${computerChoice}.`);
        console.log("You win the round!");
        humanScore++;
    } else {
        console.log(`Computer plays ${computerChoice}.`);
        console.log("Computer wins the round!");
        computerScore++;
    }
}

function playGame() {
    let roundTotal = 0;

    while (roundTotal < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
        roundTotal++;
    }

    if (humanScore > computerScore) {
        console.log("YOU WIN!");
    } else if (humanScore < computerScore) {
        console.log("YOU LOSE!");
    } else {
        console.log("DRAW!");
    }
}

playGame();