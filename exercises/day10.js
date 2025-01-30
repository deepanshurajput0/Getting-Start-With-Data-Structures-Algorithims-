// Re-cursion
// when a function continuosly call itslef 


// function Count(x){
//     console.log(x)
//       if(x<10){
//          Count(x+1)
//       } 
// }

// Count(0)


/// Iterate Array with re-cursion 

let numbers = [23, 21, 34, 4, 2, 12];

function Iteration(i) {
    let length = numbers.length;  
    console.log(numbers[i]);
    if (i < length - 1) {  
        Iteration(i + 1);
    }
}

let index = 0;
Iteration(index);

// Print factorial with Re-cursion
let num = 5
function factorial(i,fac){
    fac = fac * i
    console.log(fac)
    if(i<num){
        factorial(i+1, fac)
    }
}

let i = 1
let fac = 1;
factorial(i,fac)