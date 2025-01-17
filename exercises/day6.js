// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.


function isPositiveDominant(numbers) {
    const uniqueValues = [...new Set(numbers)];

    let positiveCount = 0;
    let negativeCount = 0;

    uniqueValues.forEach((value) => {
        if (value > 0) {
            positiveCount++;
        } else if (value < 0) {
            negativeCount++;
        }
    });
    return positiveCount > negativeCount;
}

console.log(isPositiveDominant([1, -3, -4])); 
console.log(isPositiveDominant([1, 2, 3, -1, -2])); 
console.log(isPositiveDominant([1, -1, 2, -2, 3])); 
console.log(isPositiveDominant([-1, -2, -3, 0])); 
