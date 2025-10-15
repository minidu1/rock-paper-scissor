let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let hand;
    let random = Math.random();
    if (random < 0.3) {
        hand = "rock";
    }
    else if (random < 0.6) {
        hand = "paper";
    }
    else {
        hand = "scissor";
    }

    return hand;
}
// console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissor?");
    return choice;
}
// console.log(getHumanChoice())

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice == computerChoice) {
        console.log("Tie")
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You loose! Paper beats rock");
        computerScore += 1;
    }
    else if (humanChoice == "rock" && computerChoice == "scissor") {
        console.log("You win! rock beats paper")
        humanScore += 1
    }
    else if (humanChoice == "scissor" && computerChoice == "paper") {
        console.log("You win! scissor beats paper")
        humanScore += 1
    }
    else if (humanChoice == "scissor" && computerChoice == "rock") {
        console.log("You loose! rock beats scissor")
        computerScore += 1;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! paper beats rock")
        humanScore += 1
    }
    else if (humanChoice == "paper" && computerChoice == "scissor") {
        console.log("You loose! scissor beats paper")
        computerScore += 1;
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)

    }
    console.log("Your score : "+ humanScore)
    console.log("computer score : " + computerScore)
}

playGame()