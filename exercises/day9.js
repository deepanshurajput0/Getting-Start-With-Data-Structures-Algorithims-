/// Array Sorting 


const myData = [23,21,65,43,64,6]

for(let i=0; i<myData.length; i++){
    for(let j=0; j<myData.length; j++){
       if(myData[j]>myData[j+1]){
        let temp = myData[j]
        myData[j] = myData[j+1]
        myData[j+1] = temp 
       }
    }
}
console.log(myData)


// Array Sort in Descending Order 

const myData2 = [23,21,65,43,64,6]

for(let i=0; i<myData2.length; i++){
    for(let j=0; j<myData2.length; j++){
       if(myData2[j]<myData2[j+1]){
        let temp = myData2[j]
        myData2[j] = myData2[j+1]
        myData2[j+1] = temp 
       }
    }
}
console.log(myData2)


// Sort an Array of Objects by a Property

// Problem: You have an array of objects, and you need to sort them by a specific property (e.g., name or age).


const people = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 }
  ];

  for(let i=0; i<people.length; i++){
       for(let j=0; j<people.length-1; j++){
          if(people[j].age > people[j+1].age){
            let temp = people[j];
            people[j] = people[j+1]
            people[j+1] = temp
          }
       }
  }
  console.log(people)



//   Sort an Array of Numbers in Custom Order

//   Problem: Given two arrays, the second array contains a custom order. Sort the first array according to the order specified in the second array, keeping the same relative order of items.

// arr1 = [1, 2, 3, 4, 5];
// arr2 = [4, 3, 2, 1, 5];  



const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 3, 2, 1, 5];

function sortArray(arr1,arr2){
  let uniqueValues = [...new Set(arr1,arr2)]
  let lastValue = uniqueValues[uniqueValues.length-1]
  for(let i=0; i<uniqueValues.length; i++){
    for(let j=0; j<uniqueValues.length; j++){
       if(uniqueValues[j]<uniqueValues[j+1]){
           let temp = uniqueValues[j]
           uniqueValues[j] = uniqueValues[j+1]
           uniqueValues[j+1] = temp
       }
    }
  }
   uniqueValues.shift()
   uniqueValues.push(lastValue)
   return uniqueValues
  
}
let result = sortArray(arr1,arr2)
console.log(result)






