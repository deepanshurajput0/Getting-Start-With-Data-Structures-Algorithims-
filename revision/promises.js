// In JavaScript, a Promise is an object that represents an operation that will finish in the future, either successfully or with an error.

// let myPromise = new Promise((reject,resolve)=>{
//      let success = true;
//      if(success){
//        resolve("Its succeed")
//      }else{
//         reject("Its failed")
//      }
// })


// myPromise.then((value)=>{
//   console.log(value)
// }).catch((err)=>{
//    console.log(err) 
// })



// async function handlePromsie(){
//   try {
//      const res = await myPromise
//    console.log(res)
//   } catch (error) {
//     console.log(error)
//   }
// }
// handlePromsie()



/// promise all methods


let p1 = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("This is value 1")  
    },1000)
})

let p2 = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("This is value 2")  
    },2000)
})

let p3 = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("This is value 3")  
    },3000)
})



async function resolvePromise(){
     const result = await Promise.all([p1,p2,p3])
     console.log(result)
}

resolvePromise()

// Takes an array of promises and waits for all of them to resolve.

// If any promise rejects, the whole thing rejects immediately.








