function reverseString(str) {
    return str.split("").reverse().join("");
}

const inputString1 = "Hello";
const inputString2 = "World";
const inputString3 = "JavaScript";

document.getElementById("ex4").innerHTML = "Reverse 'Hello': " + reverseString(inputString1);
document.getElementById("ex5").innerHTML = "Reverse 'World': " + reverseString(inputString2);
document.getElementById("ex6").innerHTML = "Reverse 'JavaScript': " + reverseString(inputString3);
