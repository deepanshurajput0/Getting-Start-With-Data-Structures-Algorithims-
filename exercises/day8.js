/// day 8 of logic building 
/// Arrays and its methods 
const data = [60,45,89,12,34]
let position = 2
const newElement = 20
for(let i=data.length-1; i>=0; i--){
   if(i>=position){
      data[i+1]= data[i]
      if(position===i){
         data[i] = newElement
      }
   }
}
console.log(data)




function isPositiveDominant(numbers){
   const uniqueValues = [...new Set(numbers)]
   let positiveCount = 0
   let negativeCount = 0
   uniqueValues.forEach((number)=>{
      if(number>0){
         positiveCount++
      }else if(number<0){
         negativeCount++
      }
   })
   return positiveCount>negativeCount

}

let result = isPositiveDominant([1,-2,3,4,-10,1,2,4])
console.log(result)



/// Delete Element in Array 


const myNumbers = [20,45,65,43,32]
const positions = 0
for(let i = positions; i<myNumbers.length-1; i++ ){
    myNumbers[i] = myNumbers[i+1]
}
myNumbers.length = myNumbers.length - 1
console.log(myNumbers)






