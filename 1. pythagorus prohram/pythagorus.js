let adjacent, opposite, hypotenuse;

/*
adjacent = window.prompt("Enter the length of adjacent");
opposite = window.prompt("Enter the length of opposite");
adjacent = Number(adjacent);
opposite = Number(opposite);

hypotenuse = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2));
console.log("The length of the hypotenuse is: ", hypotenuse);
*/

document.getElementById("submitButton").onclick = function() {

    adjacent = document.getElementById("adjacent").value;
    opposite = document.getElementById("opposite").value;

    hypotenuse = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2));
    document.getElementById("hypotenuse").innerHTML = hypotenuse;
};
