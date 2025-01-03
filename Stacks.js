class Node {
    constructor(value){
       this.value = value
       this.next = null
    }
}


class Stack {
    constructor(value){
     const newNode = new Node(value)
     this.first = newNode
     this.length = 1
    }
    push(value){
     let newNode = new Node(value)
     if(this.length ===0){
        this.first = newNode
     }else{
     newNode.next = this.first
     this.first = newNode
     this.length++
     return this
     }
    }
    pop(){
        if(this.length ===0){
            return undefined
        }
        let temp = this.first
        this.first = this.first.next
        temp.next = null
        this.length --
        return temp
    }
}

let myStack = new Stack(0)
myStack.push(1)
myStack.push(2)
myStack.pop()
console.log(myStack)