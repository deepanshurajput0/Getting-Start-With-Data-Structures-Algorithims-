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






