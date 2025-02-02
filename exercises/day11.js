
// How to remove duplicates from an array

function removeDuplicates(arr){
    let uniqueArray =[]
    for(let i=0; i<arr.length; i++){
       if(!uniqueArray.includes(arr[i])){
         uniqueArray[uniqueArray.length] = arr[i]
       }
    }
    return uniqueArray
}

const result =  removeDuplicates([1,2,2,3,2,4,5,3,5,4])
console.log(result)



