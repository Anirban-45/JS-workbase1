let a = 16;         // Number
let b = 'Book';     // String
let bool = true;    // Boolean
let c = { name: "Sun", type: "star" };      //Object -> name: value (pair)
const countries = ['Uruguay', 'Panama', 'Combodia'];    // Array
let p;      // Undefined ->When a variable is not assigned its type and value is undefined

let x = 11 + 'Books';   // converts it to a string ["11" + "Books"]

console.log(x); 

//Dynamic Datatype -> Reasignable variable

x = 11 + 4 + "Books";    // Evaluates expressions from let to right so, ["15" + "Books"]
x = "Books" + 11 + 4;    // [Books114]

console.log(x); 

a = 21.495;         // numbers are float as well
a = 17e-5;          // can be written as scientific exponentials

let y = 12;
let z = 15;

// (y == z)        // Returns a boolean, which is false in this case
// (y != z)        // True

// Arrays have elements. Indexes start from 0

console.log(countries[0]);

// typeof operator can be used to find a type of a variable

console.log(typeof countries[2], typeof a);