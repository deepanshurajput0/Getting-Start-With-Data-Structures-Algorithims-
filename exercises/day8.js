/// day 8 of logic building 


const myNumbers = [60,30,10,67,40]
const newElement = 45
let position = 1
for(let i=myNumbers.length-1; i>=0; i--){
   if(i>=position){
       myNumbers[i+1] = myNumbers[i]
       if(i===position){
          myNumbers[i] = newElement
       }
   }

}
console.log(myNumbers)











