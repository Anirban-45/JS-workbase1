let temp = 15;
let sunny = true;

if (temp > 0 && temp < 30 && sunny) {
    console.log("Weather is good");
}
else {
    console.log("Weather is bad");
}

temp = 50;
if (temp <= 0 || temp >= 30) {
    console.log ("The weather is bad!");
}
else {
    console.log ("The weather is good!");
}

// use of not(!) operator

sunny = false;

if (temp > 30 || temp < 0 && !sunny) {  //or precedes before and
    console.log("Weather is bad");
}
else {
    console.log("Weather is good");
}