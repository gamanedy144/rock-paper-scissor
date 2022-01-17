const resultContainer = document.querySelector('#results-container');
const resultText = document.querySelector('#result-text');
const resultChoices = document.querySelector('#result-choice');
const resultScore = document.querySelector('#result-score');
const resultEnd = document.querySelector('#result-end');
let  playerScore = 0;
let computerScore = 0;

function computerPlay(){        //randomly chooses computer option
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
    // console.log(`${playerSelection} - ${computerSelection}`);
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

function updateResult(playerChoice, computerChoice){
    let result = Number(playRound(playerChoice, computerChoice));

    if( result === 0){
        // TIE
        resultChoices.textContent = `${playerChoice} - ${computerChoice}`;
        resultContainer.appendChild(resultChoices);

        resultText.textContent = "It's a tie!";
        resultContainer.appendChild(resultText);

        resultScore.textContent = `Player: ${playerScore}   Computer: ${computerScore}`;
        resultContainer.appendChild(resultScore);
    }
    else if(result === 1){
        // PLAYER WON
        playerScore++;
        resultChoices.textContent = `${playerChoice} - ${computerChoice}`;
        resultContainer.appendChild(resultChoices);

        resultText.textContent = "You won!";
        resultContainer.appendChild(resultText);

        resultScore.textContent = `Player: ${playerScore}   Computer: ${computerScore}`;
        resultContainer.appendChild(resultScore);
    }
    else{
        // COMPUTER WON
        computerScore++;
        resultChoices.textContent = `${playerChoice} - ${computerChoice}`;
        resultContainer.appendChild(resultChoices);

        resultText.textContent = "You lost!";
        resultContainer.appendChild(resultText);

        resultScore.textContent = `Player: ${playerScore}   Computer: ${computerScore}`;
        resultContainer.appendChild(resultScore);
    }
    resetBTN.classList.remove('hidden');
}

function checkWinner(){
    if(playerScore === 5){
        resultEnd.textContent = "Congratulations!!! You beat the computer!";
        resetScore();
    }
    else if(computerScore === 5){
        resultEnd.textContent = "You lost! The computer won this time!";
        resetScore();
    }
    resultContainer.appendChild(resultEnd);
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;
    
}
function resetText(){
    resultText.textContent = "";
    resultChoices.textContent = "";
    resultScore.textContent = "";
    resultEnd.textContent = "";

}
const rockBTN = document.querySelector('#rock-button');
rockBTN.addEventListener('click', ()=>{
    resetText();
    updateResult('rock', computerPlay());
    checkWinner();
});

const paperBTN = document.querySelector('#paper-button');
paperBTN.addEventListener('click', ()=>{
    resetText();
    updateResult('paper', computerPlay());
    checkWinner();
});

const scissorsBTN = document.querySelector('#scissors-button');
scissorsBTN.addEventListener('click', ()=>{
    resetText();
    updateResult('scissors', computerPlay());
    checkWinner();
});

const resetBTN = document.querySelector('#reset-button');
resetBTN.addEventListener('click', () =>{
    resetScore();
    resetText();
    resultText.textContent = "Score was reset!";
    resultScore.textContent = "Score is now:  Player: 0 Computer: 0"
    resetBTN.classList.add('hidden');
})




// function game(){
//         while(playerSelection === null || playerSelection === ""){
//             playerSelection = prompt("I'm sorry. Choice cannot be empty!", "");
//         }
//         playerSelection = playerSelection.toLowerCase();
//         while(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
//             playerSelection = prompt("You have to choose Rock, Paper or Scissors!", "");
//         }
//         let computerSelection = computerPlay();
//         let roundResult = Number(playRound(playerSelection, computerSelection));
        
// }



