// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.


// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]


// function myNumbers(numbers) {
//     let sortedNumbers = numbers.sort((a, b) => a - b);
//     let newArr = [sortedNumbers[0], sortedNumbers[sortedNumbers.length - 1]];
//     console.log(newArr);
// }

// myNumbers([90, 13, 2, 34, 10, 254, 21]);



// Create a function which returns the number of true values there are in an array.


// function countTruthyValues(values){
//     let count = 0
//   for(let i=0; i<values.length; i++){
//     if(!values[i] === false){
//       count++
//     }else if(!values[i] === undefined){
//         count ++
//     }else if(!values[i] === 0){
//       count++
//     }else if(!values[i] === " " || "" ){
//       count++
//     }else if(!values[i] === NaN){
//       count++
//     }
//   }
//   console.log('No of truthy values',count)

// }

// countTruthyValues([false,false,true,true,0,1])



// function countTruthyValues(values) {
//     let count = 0;
//     for (let i = 0; i < values.length; i++) {
//         if (values[i]) {  
//             count++;
//         }
//     }
//     console.log('No of truthy values', count);
// }

// countTruthyValues([false, false, true, true, 0, 1, undefined,2,{}]);



function decimalToBinary(number){
    let binary = 0
   for( let i=0; i<number.length; i++){
      binary = number[i] / i
   }
   console.log(binary)
}

decimalToBinary([25])