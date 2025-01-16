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