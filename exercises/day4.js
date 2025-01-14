// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.


// num_of_digits(1000) ➞ 4

// num_of_digits(12) ➞ 2

// num_of_digits(1305981031) ➞ 10


function noOfDigits(number){
     return String(number).length
}

let result = noOfDigits(0)
console.log(result)