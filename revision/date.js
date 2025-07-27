const currentDate = new Date()

const date = currentDate.getDate()
const month = currentDate.getMonth()
const year = currentDate.getFullYear()
console.log(`${date}-${month}-${year}`)



//Timer 


// let seconds = 0;
// let minutes = 0;
// let hours = 0;
// setInterval(()=>{
//     seconds++ 
//     if(seconds > 59){
//      seconds = 0;
//      minutes++               
//     }else if(minutes> 59){
//       minutes = 0;
//       hours++  
//     }
//  const timer = `${hours}:${minutes}:${seconds}`
//  console.log(timer)
// },1000)




function calculate(){
    let a = 0
    for(let i=0; i<1000000; i++){
       a = a + 1;
    }
    return a
}

const beforeDate = new Date()
const beforeTime = beforeDate.getTime()

calculate()

const afterDate = new Date()
const afterTime = afterDate.getTime()

console.log(afterDate-beforeDate)


