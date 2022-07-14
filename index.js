
document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText").value;
    console.log(myName);

    document.getElementById("username").innerHTML = myName;
}
