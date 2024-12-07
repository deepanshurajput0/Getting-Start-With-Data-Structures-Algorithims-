// const data = [10,30,23,90,12,43,6,12,9,5,3]

// for(let i=0; i<data.length; i++){
//   console.log(data[i])
// }


let data = [60,30,10,67,40]
let position = 2 
let newElement = 90
for(let i = data.length-1; i>=0; i--){
  if(i>=position){
     data[i+1] = data[i]
  }
  if(i==position){
    data[i] = newElement
  }
}

console.log(data)
