/// Linked List 


class node {
    constructor(value){
      this.head = value
      this.next = null
    }
}


class LinkedList{
    constructor(value){
     this.head = new node(value)
     this.tail = this.head
     this.length = 1
    } 
    push(value){
      let newNode = new node(value)
      this.tail.next = newNode
      this.tail = newNode
      this.length ++;
    }
}

const linkedlist = new LinkedList(1)
linkedlist.push(10)
console.log(linkedlist)






