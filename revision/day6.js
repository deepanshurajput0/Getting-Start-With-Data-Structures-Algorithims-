console.log("code 1")


function findSum(n){
    let sum = 0;
   for(let i=0; i<n; i++){
    sum = sum + i 
   }
   console.log(sum)
}

findSum(100)


function sleepSync(){
    let sum = 0;
   for(let i=0; i<100000000; i++){
     sum = sum+i        
   }
   return sum
}

sleepSync()

console.log("This is last code line")

