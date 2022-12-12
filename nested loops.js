// nested loops = loops inside of another loops

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {       //replaced i with j
        console.log(j);
    }
}

// spontanious project** -> create a rectangle with loops

let symbol = "*";
let rows = 4;
let columns = 7;

for (let i = 0; i <= rows; i++) {
    for (let j = 0; j < columns; j++) {
        document.getElementById("rectangle").innerHTML += symbol;      // += is appending symbol to the label for each loop iteration (j)
    }
    document.getElementById("rectangle").innerHTML += "<br>"       // += is appending linebreak to the label for each loop iteration (i)
}