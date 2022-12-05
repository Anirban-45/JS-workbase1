// while loop = repeat some code while some condition is true

let username = "";

while (username == "") {
    username = window.prompt("Enter your name <while>");
}

console.log("Hello", username);

// do while loop = do task > check condition > repeat if condition is true
// So basically you will always do the task once. And then repeat until false

let username2 = "";


do {
    username2 = window.prompt("Enter your name <do while>");
} while (username2 == "");

console.log("Hello", username2);

// for loop = repeats some code for certain amount of time

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// while loops are better for codes which we may repeat infinite amount of time
// for loops are better for repeating codes for certain amount of time 