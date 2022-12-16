//functions -> defining code once and reusing it.

// Declaration of a function
function talkative(){
    console.log("Never talk with your mouth full.");
}

// Function call(invoke)
console.log("Listen to him kid.");
talkative();

// Parameters -> variables set for the functions to modify it by the block of codes
let time = "10pm";

function truthOrDare(username, status, description){        // name, status and descriptions are variables
    console.log(`Hello ${username}, its ${time}.`);          // functions have access to global variables
    if (status == "dare" || status == "Dare") {
        console.log(`You have been dared to ${description}.`);  // using the parameter in function
    }
    else{
        console.log(`You have to say the truth about ${description}.`);
    }
}

truthOrDare("Erira", "Dare", "balance on a tightrope");     // Passing the values(arguments) of parameters

// Inside of the functions the parameters act as local variables
// However, variables declared inside functions can't be accessed outside.

/* rwturn statement -> The last thing a function will come across
                    -> This returns a value back where the function is revoked */

function multiply(a, b) {
    return a * b;
}

console.log(multiply(7, 11));      // returns the value after multiplying a an b

// if there is no return statement the value of the invoked function will be "undefined"
// accessing a function without the parenthesis will return the function as object. i.e. the function body itself

console.log(multiply);
