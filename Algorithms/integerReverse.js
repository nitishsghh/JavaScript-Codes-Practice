function reverseInteger(number) {
    return parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
}

const num1 = 12345;
const num2 = -9876;
const num3 = 100;

document.getElementById("ex7").innerHTML = "Reverse 12345: " + reverseInteger(num1);
document.getElementById("ex8").innerHTML = "Reverse -9876: " + reverseInteger(num2);
document.getElementById("ex9").innerHTML = "Reverse 100: " + reverseInteger(num3);
