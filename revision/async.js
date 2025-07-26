/// Async operations 


setTimeout(()=>{
    console.log("Hello World 1")
    setTimeout(()=>{
        console.log("Hello World 2")
    },2000)
    setTimeout(()=>{
      console.log("hello world 3")
    },4000)
    console.log("hello world 4")
},1000)




// meanwhile this syncronous 

console.log("hello world 1")
console.log("hello world 2")
console.log("hello wolrd 3")
console.log("Hello world 5")



const fetchData = new Promise((reject,resolve)=>{
       const data = fetch("https://jsonplaceholder.typicode.com/posts/1")
       .then((res)=>res.json())
       if(data){
          resolve(data)
       }else{
        reject("Error while fetching data")
       }
})

fetchData.then((data)=>console.log(data.s))
.catch((err)=>console.log(err))


