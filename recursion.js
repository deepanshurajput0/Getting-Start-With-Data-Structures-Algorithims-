function apple(x){
   if(x<=10){
      console.log(x)
    apple(x+1)
   }
}

let data = 0
apple(data)

let n =5;
let result =1;
for(let i=1; i<=n; i++){
     console.log(result *= i) 
}


function findFactorial(num){
   if(num==0){
      return 1
   }
    return num * findFactorial(num-1)
}


let num = 5;
console.log(findFactorial(num))