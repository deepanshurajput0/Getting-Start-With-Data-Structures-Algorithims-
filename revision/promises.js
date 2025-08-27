// In JavaScript, a Promise is an object that represents an operation that will finish in the future, either successfully or with an error.

let myPromise = new Promise((reject,resolve)=>{
     let success = true;
     if(success){
       resolve("Its succeed")
     }else{
        reject("Its failed")
     }
})


// myPromise.then((value)=>{
//   console.log(value)
// }).catch((err)=>{
//    console.log(err) 
// })



async function handlePromsie(){
  try {
     const res = await myPromise
   console.log(res)
  } catch (error) {
    console.log(error)
  }
}
handlePromsie()




