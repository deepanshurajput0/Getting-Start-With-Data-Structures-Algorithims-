//// asynchronous javascript

// function findSum(n){
//     let a = 0;
//     for(let i=0; i<n; i++){
//       a++      
//     }
//     return a
// }


// function findSumIn2Sec(){
//    console.log(findSum(100000))
// } 

function sleepSync(){
    let b = 0;
    for(let i=0; i<100000000; i++){
       b = i+1; 
    }
    // console.log(b)
    return b

}


sleepSync();

// setTimeout(findSumIn2Sec,3000)

console.log("hi there")


