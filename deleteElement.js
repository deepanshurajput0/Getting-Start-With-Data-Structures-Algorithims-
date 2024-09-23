const data = [12,3,45,90,78,56]
let position = 3 
for(let i=position; i<data.length-1; i++){
     data[i] = data[i+1]
}

data.length = data.length - 1
console.log(data)