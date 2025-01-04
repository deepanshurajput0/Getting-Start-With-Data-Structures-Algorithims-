// Convert minutes into seconds 


function convertIntoSec(num){
    let result = num*60
    console.log(`${result} Seconds`)
}


convertIntoSec(2)

// Return the Next Number from the Integer Passed

function Increment(num){
    let result = num+1
    console.log(result)
}

Increment(10)


// Area of Triangle 

function Area(b,h){
   let result = 1/2 * b * h 
   console.log(result)
}

Area(10,15)


// Convert Age Into Days 

function ageIntoDays(num){
   let result = num * 365
   console.log(result)
}

ageIntoDays(20)


// Add up the Numbers from a Single Number

function totalSum(n){
    let sum = 0
  for(let i=1; i<=n; i++){
    sum = sum + i
  }
  console.log(sum)
}

totalSum(4)
