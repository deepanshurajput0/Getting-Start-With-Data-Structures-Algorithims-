/// day 8 of logic building 
/// Arrays and its methods 
const data = [60,45,89,12,34]
let position = 2
const newElement = 20
for(let i=data.length-1; i>=0; i--){
   if(i>=position){
      console.log(data[i])
      data[i+1] = data[i]
      data[i] = newElement
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

const myNumbers = [10,20,12,43,54]
let positions = 2
for(let i=positions; i<myNumbers.length-1; i++){
  myNumbers[i] = myNumbers[i+1]
}
myNumbers.length = myNumbers.length-1
console.log(myNumbers)



// Reverse an Array
// Reverse the elements of an array without using any additional space.

const myArr = [10,234,4,3,2,32]

for(let i=myArr.length; i>=0; i--){
   console.log(myArr[i])
}


// Find the Frequency of Elements
// Count the frequency of each element in the array.

const arr = [2,3,4,2,13,21,3,2]

const frequency = {}

for(let i=0; i<arr.length; i++){
  const element = arr[i]
  if(frequency[element]){
     frequency[element]++
  }else{
     frequency[element]=1
  }
}
console.log(frequency)



/// Search Elements in Array 

const arr2 = [2,3,4,2,13,21,3,2]

function SearchElement(el){
   for(let i=0; i<arr2.length; i++){
       if(arr2[i] === el){
         return true
       }

   }
   return false
}

let result3 = SearchElement(7)
console.log(result3)


