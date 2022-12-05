// break = breaks out of a loop entirely
// continue = skip an iteration of the loop

for (let i = 0; i <= 20; i++) {
    if (i == 13) {
        break;
    }
    console.log(i);     // prints out 0 to 12
}

for (let i = 0; i <= 20; i++) {
    if (i == 13) {
        continue;       // prints out 0 to 12 skips 13 the 14 to 20
    }
    console.log(i);
}