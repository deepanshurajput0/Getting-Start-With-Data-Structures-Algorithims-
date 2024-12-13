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
}

const linkedlist = new LinkedList(1)
console.log(linkedlist)



