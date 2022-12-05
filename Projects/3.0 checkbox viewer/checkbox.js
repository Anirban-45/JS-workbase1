
document.getElementById("myButton").onclick = function() {

    const checkbox = document.getElementById("myCheckbox");
    const visaRadio = document.getElementById("visaRadio");
    const mastercardRadio = document.getElementById("mastercardRadio");
    const paypalRadio = document.getElementById("paypalRadio");

    if (checkbox.checked) {
        console.log("You have checked it.");
    }
    else {
        console.log("You have not checked it.");
    }

    if (visaRadio.checked){
        console.log("You'll pay with Visa");
    }
    else if (mastercardRadio.checked) {
        console.log("You'll pay with Mastercard");
    }
    else if (paypalRadio.checked) {
        console.log("You'll pay with Paypal");
    }
    else {
        console.log("You have not paid");
    }

}
