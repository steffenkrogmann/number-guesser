let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

const compareGuesses = (humanGuess, computerGuess, target) => {
 if (Math.abs(computerGuess - target) > Math.abs(humanGuess - target)) {
    return true;
 } else {
    return false;
 }
}

const updateScore = winner => {
    if (winner === "human") {
        humanScore ++;
    } else if (winner === "computer") {
        computerScore ++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}

// Testing
/*
console.log(generateTarget());
console.log(compareGuesses(5, 7, 8));
advanceRound();
console.log(currentRoundNumber);
*/