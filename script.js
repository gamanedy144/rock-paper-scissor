function computerPlay(){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "Error";
    }
}
function playRound(playerSelection, computerSelection){
    console.log(`${playerSelection} - ${computerSelection}`);
    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            return 0;
        }
        else if(computerSelection === "paper"){
            return -1;
        }
        else return 1;
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "paper"){
            return 0;
        }
        else if(computerSelection === "scissors"){
            return -1;
        }
        else return 1;
    }
    else{
        if(computerSelection === "scissors"){
            return 0;
        }
        else if(computerSelection === "rock"){
            return -1;
        }
        else return 1;
    }
}

function game(){
    let playerCount = 0;
    let computerCount = 0;
    for(let i=0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?", "");
        
        while(playerSelection === null || playerSelection === ""){
            playerSelection = prompt("I'm sorry. Choice cannot be empty!", "");
        }
        playerSelection = playerSelection.toLowerCase();
        while(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
            playerSelection = prompt("You have to choose Rock, Paper or Scissors!", "");
        }
        let computerSelection = computerPlay();
        let roundResult = Number(playRound(playerSelection, computerSelection));
        if( roundResult === 0){
            console.log(`It's a tie! \nThe score is ${playerCount} - ${computerCount}`);
        }
        else if(roundResult === 1){
            playerCount++;
            console.log(`You win!! \nThe score is ${playerCount} - ${computerCount}`);
        }
        else{
            computerCount++;
            console.log(`You lose! \nThe score is ${playerCount} - ${computerCount}`);
        }
    }
}
game();