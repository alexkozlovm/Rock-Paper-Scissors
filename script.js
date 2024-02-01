const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const resultText = document.getElementById('result');
const scoreText = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {
    resultText.innerHTML = playRound('rock');
});

paper.addEventListener('click', () => {
    resultText.innerHTML = playRound('paper');
});

scissors.addEventListener('click', () => {
    resultText.innerHTML = playRound('scissors');
});

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    const result = getResult(playerSelection, computerSelection);
    scoreCheck(result);
    return result;
}

computerPlay = () => {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

getResult = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
scoreCheck = (result) => {
    if (result.includes('win')) {
        playerScore++;
    } else if (result.includes('lose')) {
        computerScore++;
    }
    scoreText.innerHTML = `Player: ${playerScore} Computer: ${computerScore}`;
    if (playerScore === 5) {
        alert('You won the game!');
        resetScore();
    } else if (computerScore === 5) {
        alert('You lost the game!');
        resetScore();
    }
}
resetScore = () => {
    playerScore = 0;
    computerScore = 0;
    resultText.innerHTML = '';
    scoreText.innerHTML = `Player: ${playerScore} Computer: ${computerScore}`;
}