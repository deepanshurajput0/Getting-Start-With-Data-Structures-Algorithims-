// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.


// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]


function myNumbers(numbers) {
    let sortedNumbers = numbers.sort((a, b) => a - b);
    let newArr = [sortedNumbers[0], sortedNumbers[sortedNumbers.length - 1]];
    console.log(newArr);
}

myNumbers([90, 13, 2, 34, 10, 254, 21]);


