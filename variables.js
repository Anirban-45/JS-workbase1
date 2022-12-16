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

// variable scope -> where the variables are accesible

// let -> vaiables are limited to block scope {}
// var -> variables are limited to a function ()

for (let i = 0; i <= 3; i++) {
    console.log(i);         
}

// i is not accessible outside of the blockscope {} of the for loop, if var was usedit could be accessed

function oneToThree(){
    for (var i = 1; i <= 3; i++) {
        console.log(i);         
    }
}

// over here even if we declared i by var it is not accesible outside of oneToThhree()
// variables declared outside of any function is a global variable

