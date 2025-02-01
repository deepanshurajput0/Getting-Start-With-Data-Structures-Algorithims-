
function removeDuplicates(arr){
   const unique = {}
   const result =[]
   for(let i=0; i<arr.length; i++){
      let num = arr[i]
      if(unique[num] === undefined){
        unique[num] = true
        result[result.length] = num
      }
   }
   return result

}

console.log(removeDuplicates([1,2,3,2,1,3,5]))


