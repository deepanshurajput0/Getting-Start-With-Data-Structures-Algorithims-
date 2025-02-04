
// How to remove duplicates from an array

function removeDuplicates(arr){
   const unique = []
   for(let i=0; i<arr.length; i++){
       if(!unique.includes(arr[i])){
        unique[unique.length] = arr[i]
       }
   }
   return unique
}

let result0 = removeDuplicates([1,2,2,1,3,4,2,4,5,23,4,23])
console.log(result0)


// const myarray = [12, 32, 34, 23, 65];
// const myarray2 = [23,21,12,34,32,1]

function commonValues(arr1,arr2){
    let common = []
    for(let i=0; i<arr2.length; i++){
       if(arr1.includes(arr2[i])){
           common[common.length] = arr2[i] 
       }
    }
    return common
}

let result2 = commonValues(myarray,myarray2)
console.log(result2)




/// Find Common Elements Between two Arrays without uisng inbuild methods 

const myarray = [12, 32, 34, 23, 65];
const myarray2 = [23, 21, 12, 34, 32, 1];

function commonValues(arr1,arr2){
   const common =[]
   for(let i=0; i<arr1.length; i++){
      for(let j=0; j<arr2.length; j++){
         if(arr1[i] === arr2[j]){
             let alreadyexists = false
             for(let k=0; k<common.length; k++){
               if(common[k] === arr1[i]){
                alreadyexists = true;
                break
               }
             }
             if(!alreadyexists){
                common[common.length] = arr1[i]
             }
         }
      }
   }
   return common
}

let result = commonValues(myarray,myarray2)
console.log(result)