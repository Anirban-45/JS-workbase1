let username = "Topology", phoneNumber = "123-456-7890";

console.log(username.length);
console.log(username.charAt(4));
console.log(username.indexOf("o")); // first ocurrence -> indexOf() , last ocurrence -> lastIndexOf()
console.log(username.toUpperCase(), username.toLowerCase());
console.log(phoneNumber, phoneNumber.replaceAll("-", ""));

username = "  topsy turvy   ";

console.log(username, username.trim()); // eats up space

//slice method:
let name = "Dandelion Alamanda";
let firstName, lastName;

//lastName = name.slice(10);  // from 10th charachter to end
//firstName = name.slice(0,9);  // from 0 to 9th

lastName = name.slice(name.indexOf(" ") + 1);
firstName = name.slice(0, name.indexOf(" "));

console.log(firstName);
console.log(lastName);

// Template literals --> Backticks (``)

let a = `Azure's dev tools`;        // Can use single or double quotes inside of it.
let b = `Amazon
        Web services`;          // Can span upto multiline

let continent = `Asia`
let d = `My home is in ${continent}'s south.`;  //We can put the variable with a ${} symbol. Its called interpolation.

console.log(d);

let x = `The land of ${continent} has a population of ${phoneNumber.charAt(6) + phoneNumber.charAt(4)} million`;
                // interpolation supports JS expressions --> Expression substitution

console.log(x);