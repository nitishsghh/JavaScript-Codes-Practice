function findAverage(array) {
    let runningTotal = 0;
    for (i = 0; i < test.length; i++) {
        runningTotal += array[i];
    }
    return runningTotal / array.length;
}

let test = [3, -1, 0, 9];
console.log(findAverage(test));