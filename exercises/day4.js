// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.


// num_of_digits(1000) ➞ 4

// num_of_digits(12) ➞ 2

// num_of_digits(1305981031) ➞ 10


function noOfDigits(number){
     return String(number).length
}

let result = noOfDigits(0)
console.log(result)



// Which Generation Are You?

// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

//     If the number is negative, return the related ancestor.
//     If positive, return the related descendant.
//     You are generation 0. In the case of 0 (male or female), return "me!".



function GenerationFinder(x,y){
   if(x===0){
    return 'me'
   }
   if(x<0){
     if(y==='m'){
       if(x===-1) return 'father'
       if(x===-2) return 'grandfather'
       if(x===-3) return 'greatgrandfather'
     }
     if(y==='f'){
        if(x===-1) return 'mother'
        if(x===-2) return 'grandmother'
        if(x===-3) return 'greatgrandmother'
     }
   }
   if(x>0){
    if(y==='m'){
      if(x===1) return 'son'
      if(x===2) return 'grandSon'
      if(x===3) return 'greatgrandSon'
    }
    if(y==='f'){
       if(x===1) return 'daughter'
       if(x===2) return 'grandDaughter'
       if(x===3) return 'greatgrandDaughter'
    }
  }


}

let result2 = GenerationFinder(-1,'m')
console.log(result2)



// Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.



function functionMaker(baseNumber){
      return function plus_baseNumber(number){
         return number + baseNumber
    }
   
}

const addFive =  functionMaker(5)
let result3 = addFive(5)
console.log(result3)




// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".


function NumberChecker(arr) {
    for (let num of arr) {
        if (num.toString().includes('7')) {
            return 'Boom!';
        }
    }
    return 'There is no 7 in the array';
}

let result4 = NumberChecker([1, 2, 3, 2, 71]);
console.log(result4);



// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.


function countBoomerangs(arr) {
  let boomerangCount = 0; // Initialize a counter for boomerangs.

  // Loop through the array with a sliding window of size 3.
  for (let i = 0; i < arr.length - 2; i++) {
    // Extract the triplet: arr[i], arr[i+1], arr[i+2].
    let first = arr[i];
    let middle = arr[i + 1];
    let last = arr[i + 2];

    // Check if it's a boomerang.
    if (first === last && first !== middle) {
      boomerangCount++; // Increment counter if it's a boomerang.
    }
  }

  return boomerangCount; // Return the total count of boomerangs.
}

// Example usage:
console.log(countBoomerangs([3, 7, 3, 1, -1, 1, 5, 6, 5])); // Output: 3
console.log(countBoomerangs([1, 2, 1, 2, 1, 2])); // Output: 3
console.log(countBoomerangs([1, 2, 3])); // Output: 0
