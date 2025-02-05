
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

// function commonValues(arr1,arr2){
//     let common = []
//     for(let i=0; i<arr2.length; i++){
//        if(arr1.includes(arr2[i])){
//            common[common.length] = arr2[i] 
//        }
//     }
//     return common
// }

// let result2 = commonValues(myarray,myarray2)
// console.log(result2)




/// Find Common Elements Between two Arrays without uisng inbuild methods 



const myarray = [12, 32, 34, 23, 65,34];
const myarray2 = [23,21,12,34,32,1]

function findCommon(arr1,arr2){
   let common = []
    for(let i=0; i<arr1.length; i++){
       for(let j=0; j<arr2.length; j++){
          if(arr1[i]=== arr2[j]){
            let alreadyexists = false
            for(let k=0; k<common.length; k++){
               if(common[k]===arr1[i]){
                  alreadyexists = true
                  break;
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


let result = findCommon(myarray,myarray2)
console.log(result)





const newArray =[1,2,2,4,12,32,231,43,32,12]


function findUniques(newArray){
   let uniques =  []
   for(let i=0; i<newArray.length; i++){
      let duplicates = false
      for(let j=0; j<uniques.length; j++){
          if(newArray[i]===uniques[j]){
               duplicates = true  
               break; 
          }
      }
      if(!duplicates){
         uniques[uniques.length] = newArray[i]
      }
   }
   return uniques
}

let result4 = findUniques(newArray)
console.log(result4)




