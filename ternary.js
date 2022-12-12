// Ternary operato is a shortcut for if/else statement
// It thakes 3 properties. condition, expression if true, expression if false

// structure ->  condition ? exIfTrue : exIfFalse

checkWinner(true);      // sending the argument true to a boolean parameter

function checkWinner(win) {
    win ? console.log("You win") : console.log("You lose");
}
