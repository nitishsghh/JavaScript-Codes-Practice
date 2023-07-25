const factorial = number => {
    return number < 2 ? 1 : number * factorial(number - 1);
};

const result1 = factorial(0);
const result2 = factorial(2);
const result3 = factorial(4);

document.getElementById("ex1").innerHTML = "Factorial 0: " + result1;
document.getElementById("ex2").innerHTML = "Factorial 2: " + result2;
document.getElementById("ex3").innerHTML = "Factorial 4: " + result3;
