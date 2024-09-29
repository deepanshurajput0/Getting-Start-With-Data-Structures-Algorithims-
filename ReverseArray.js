let data = [12,67,90,45,0]


function customReverse(data,start,end){
    console.log(data)
   if(start<=end){
    let temp = data[start]
    data[start] = data[end]
    data[end] = temp
    customReverse(data,start+1, end -1)
   }
   
}

customReverse(data,0, data.length-1)