/// Array Sorting 


const myData = [23,21,65,43,64,6]

for(let i=0; i<myData.length; i++){
    for(let j=0; j<myData.length; j++){
       if(myData[j]>myData[j+1]){
        let temp = myData[j]
        myData[j] = myData[j+1]
        myData[j+1] = temp 
       }
    }
}
console.log(myData)