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