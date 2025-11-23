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

// function getHumanChoice() {
//     let choice = prompt("Rock, Paper or Scissor?");
//     return choice;
// }
// console.log(getHumanChoice())

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    let text = ""

    if (humanChoice == computerChoice) {
        text = "Tie"
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        text = ("You lose! Paper beats rock");
        computerScore += 1;
    }
    else if (humanChoice == "rock" && computerChoice == "scissor") {
        text = ("You win! rock beats paper")
        humanScore += 1
    }
    else if (humanChoice == "scissor" && computerChoice == "paper") {
        text = ("You win! scissor beats paper")
        humanScore += 1
    }
    else if (humanChoice == "scissor" && computerChoice == "rock") {
        text = ("You lose! rock beats scissor")
        computerScore += 1;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        text = ("You win! paper beats rock")
        humanScore += 1
    }
    else if (humanChoice == "paper" && computerChoice == "scissor") {
        text = ("You lose! scissor beats paper")
        computerScore += 1;
    }
    return text;

}


// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();

//         playRound(humanSelection, computerSelection)

//     }
//     console.log("Your score : "+ humanScore)
//     console.log("computer score : " + computerScore)
// }

// const rock =document.querySelector("#rock");
// const paper =document.querySelector("#paper");
// const scissor =document.querySelector("#scissor");

// rock.addEventListener("click", event =>{
//     const humanSelection =  event.target.value;
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection)
// })

// paper.addEventListener("click", event =>{
//     const humanSelection =  event.target.value;
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection)
// })

// scissor.addEventListener("click", event =>{
//     const humanSelection =  event.target.value;
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection)
// })

const div = document.createElement("div");
document.body.appendChild(div);

const choice = document.querySelectorAll(".choice");
console.log(choice);


    choice.forEach(button => {
        button.addEventListener("click", event => {

            console.log("Button detected:", button);
            console.log("Button clicked:", event.target);



            const humanSelection = event.target.value;
            const computerSelection = getComputerChoice();

            console.log("Human selected:", humanSelection);
            console.log("Computer selected:", computerSelection);


            const result = playRound(humanSelection, computerSelection)
            div.textContent = result

            document.querySelector("#human-score").textContent = humanScore;
            document.querySelector("#computer-score").textContent = computerScore

            checkWinner(); //check if someone got 5 marks
        })
    })

function checkWinner(){
    if (humanScore == 5){
        div.textContent = "You win!";
        showResetButton();
        disableButtons();
    }
    else if (computerScore == 5){
        div.textContent ="You lose!"
         showResetButton();
         disableButtons();
    }
}

function showResetButton(){
    const reset = document.createElement("button")
    reset.textContent = "Play again"
    document.body.appendChild(reset)

    reset.addEventListener("click", ()=>{
        computerScore = 0
        humanScore = 0

        document.querySelector("#human-score").textContent = humanScore;
        document.querySelector("#computer-score").textContent = computerScore

        div.textContent = ""
        reset.remove()

        choice.forEach(button=> button.disabled = false)
    })
}

function disableButtons(){
    choice.forEach(button=> button.disabled = true)
}