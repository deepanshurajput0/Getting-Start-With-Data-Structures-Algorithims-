const data = []
let currentSize = data.length;
const max = 5;

function push(val){
  if(currentSize<=5){
    data[currentSize] = val;
  currentSize+=1;
  }
}

function pop(){
    if(currentSize>0){
        currentSize-=1
        data.length = currentSize
    }
}

push(10)
push(20)
push(130)
push(50)
push(50)
push(50)
pop()
pop()
pop()


console.log(data)
