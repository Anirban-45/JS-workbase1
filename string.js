let username = "Topology", phoneNumber = "123-456-7890";

console.log(username.length);
console.log(username.charAt(4));
console.log(username.indexOf("o")); // first ocurrence -> indexOf() , last ocurrence -> lastIndexOf()
console.log(username.toUpperCase(), username.toLowerCase());
console.log(phoneNumber, phoneNumber.replaceAll("-", ""));

username = "  topsy turvy   ";

console.log(username, username.trim());

//slice method:
let name = "Dandelion Alamanda";
let firstName, lastName;

//lastName = name.slice(10);
//firstName = name.slice(0,9);

lastName = name.slice(name.indexOf(" ") + 1);
firstName = name.slice(0, name.indexOf(" "))

console.log(firstName);
console.log(lastName);
