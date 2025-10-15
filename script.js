function getComputerChoice(){
    let hand;
    let random = Math.random();
    if (random<0.3){
        hand = "Rock"
    }
    else if(random<0.6){
        hand = "Paper";
    }
    else{
        hand = "Scissor";
    }

    return hand;
}

// console.log(getComputerChoice());
function getHumanChoice(){
    let choice= prompt("Rock, Paper or Scissor?");
    return choice;
}

console.log(getHumanChoice())