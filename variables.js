//alert("stoopid Alert");

//declaration
var age = 21; //number
let name = "Anniline"; //string
const status = true; //boolean // can't be changed later

//console printing
console.log(name+ "'s age is "+ age);
console.log("status:",status);

//Showing on browser or DOM

document.getElementById("p2").innerHTML = "Your are " + age + " years old."

// Type conversion

let ageX = window.prompt("How old were you last year?"); //string
console.log(typeof ageX); // finds out the datatype

ageX = Number(ageX); // Number() changes other datatypes to number
console.log(typeof ageX);
ageX++;
console.log("Happy birthday! You're", ageX, "years old!");

let x = Number("1.456");
let y = String(3.256);
let z = Boolean("sum"); // true as there is input

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

z = Boolean("");
console.log(z, typeof z); // false
