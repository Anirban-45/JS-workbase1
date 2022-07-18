
document.getElementById("myButton").onclick = function() {

    const checkbox = document.getElementById("myCheckbox");
    if (checkbox.checked) {
        console.log("You have checked it.");
    }
    else {
        console.log("You have not checked it.");
    }
}
