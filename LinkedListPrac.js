/// Linked List 


class node{
    constructor(value){
       this.head = value
       this.next = null
    }
}

class Linkedlist{
  constructor(value){
    this.head = new node(value)
    this.tail = this.head
    this.length = 1
  }
  push(value){
   const newNode = new node(value)
   if(!this.head){
     this.head = newNode
     this.tail = newNode
   }
   this.tail.next = newNode
   this.tail = newNode
   this.length++
  }
  pop(){
    let temp = this.head
    let prev = this.head
    while(temp.next){
      prev = temp
      temp = prev.next
    }
    this.tail = prev
    this.tail.next = null
    this.length --
    return temp;
  }
}


const myLinkedList = new Linkedlist(7)
myLinkedList.push(10)
// myLinkedList.push(12)
console.log(myLinkedList.pop())




// Let's walk through an example with a linked list containing three nodes: 7 -> 10 -> 12.
// Initial Setup:

//     temp = this.head (points to the first node, 7).
//     prev = this.head (also points to the first node, 7).

// First Iteration:

//     temp.next is not null (points to 10).
//     Update prev = temp (now prev points to 7).
//     Update temp = temp.next (now temp points to 10).

// Second Iteration:

//     temp.next is not null (points to 12).
//     Update prev = temp (now prev points to 10).
//     Update temp = temp.next (now temp points to 12).

// Third Iteration:

//     temp.next is null (12 is the last node), so the loop ends.

// Final State:

//     temp points to the last node (12).
//     prev points to the second-to-last node (10).