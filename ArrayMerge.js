const data = [12,23,43,54,64,4,43]
const data2 = [80,3,23,43,56,75,46]
const data3 = [ ]
for(let i=0; i<data.length; i++){
   data3[i] = data[i]
  
}
for(let i=0; i<data2.length; i++){
    data3[data.length+i] = data2[i]
}

console.log(data3)



const arr1 = [12,34,89,90,45]
const arr2 = [45,70,90,34,12,34]
const arr3 = [18,16,12,89,23,96]
const arr4 = [] 
for(let i=0; i<arr1.length; i++){
  arr4[i] = arr1[i]
}

for(let i=0; i<arr2.length; i++){
   arr4[arr1.length+i] = arr2[i]
}

for(let i=0; i<arr3.length; i++){
   arr4[arr1.length +  arr2.length+i] = arr3[i]
}

console.log(arr4)





Example  


// Let’s see how the loop runs with an example:

//     Before the Loop:
//         arr3 is [12, 34, 89, 90, 45] (after the first loop).

//     Loop Iterations for arr2:

//         Iteration 1 (i = 0):
//             arr3[5 + 0] → arr3[5] gets arr2[0] (which is 45).
//             So, arr3 becomes: [12, 34, 89, 90, 45, 45].

//         Iteration 2 (i = 1):
//             arr3[5 + 1] → arr3[6] gets arr2[1] (which is 70).
//             So, arr3 becomes: [12, 34, 89, 90, 45, 45, 70].

//         Iteration 3 (i = 2):
//             arr3[5 + 2] → arr3[7] gets arr2[2] (which is 90).
//             So, arr3 becomes: [12, 34, 89, 90, 45, 45, 70, 90].









