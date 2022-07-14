const pi = 3.1416;
let radius;
let circumference;

radius = window.prompt("Enter the radius of the circle");
radius = Number(radius);

circumference = pi * radius * radius;
console.log("Circumference is:", circumference);
