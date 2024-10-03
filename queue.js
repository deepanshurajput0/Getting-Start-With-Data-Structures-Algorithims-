let queue = []
let currentSize = queue.length
let maxSize = 5;

function enqueue (newVal){
    if(currentSize>= maxSize){
        console.log('Queue is already full')
    }
   queue[currentSize] = newVal
   currentSize++
}


function display(){
    console.log(queue)
}


function dequeue(){
    for(let i=0; i<queue.length; i++){
     queue[i] = queue[i+1]
    }
    currentSize--
    queue.length = currentSize
 }


enqueue(25)
enqueue(30)
enqueue(45)
enqueue(89)

display()
dequeue()
display()










