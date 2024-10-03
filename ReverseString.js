// const data =[]
// let currentSize = data.length
// const maxVal = 5

// function push(newVal){
//     data[currentSize] = newVal
//     currentSize = currentSize + 1
// }

// function pop(){
//     let  lastRemovedItem = data[currentSize-1]
//     currentSize= currentSize-1
//     data.length = currentSize
//     return lastRemovedItem
// }


// function reverseString(item){
//     for( let i=0; i<item.length; i++ ){
//       push(item[i])
//     }
//     for( let i=0; i<item.length; i++ ){
//       console.log(pop())
//     }
// }

// let str = 'deepanshu'
// str = str.split("")

// reverseString(str)



let elements = [12,34,5,412,3,3,453,2,34,12]

for(let i=0; i<elements.length; i++){
    for(let j=i + 1; j<elements.length; j++){
      if(elements[i] ==  elements[j]){
        elements.splice(j,1)
        j--
      }
    } 
}

console.log(elements)



