// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.



function EvenOddChecker(number){
   const numbers = String(number).split('')
   let sum = 0
   for(let i=0; i<numbers.length; i++){
    sum = sum + Number(numbers[i])
   }
   if(sum%2===0){
     return 'Evenish'
   }else{
    return 'Oddish'
   }
}

const result = EvenOddChecker(2426)
console.log(result)


// Write a function that takes a string input and returns the string in a reversed case and order.


function ReverseString(data){
    return data.split('').reverse().join('')
}
let result2 = ReverseString('chirag')
console.log(result2)


///Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

function numInStr(arr) {
    const containsNumber = (str) => {
      for (let char of str) {
        if (!isNaN(char) && char !== ' ') { 
          return true;
        }
      }
      return false;
    };
  
    return arr.filter(containsNumber);
  }

  const result3 = numInStr(["1a", "a", "2b", "b",'556b']);
  console.log(result3);
  


//   Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.


// function permutations(...digits) {
//     let result = 1;
//     for (let i = 0; i < digits.length; i++) {
//       result *= digits[i];
//     }
//     return result;
//   }
//   console.log(permutations(2, 4)); 
//   console.log(permutations(2, 3, 5));
//   console.log(permutations()); 
  

  // find factorial of any number

function findFactorial(n){
  for(let i=1; i<n; i++){
        console.log(i) 
  }
}
findFactorial(4)