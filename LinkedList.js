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
      if(!this.head){
        this.head = newNode
        this.tail = newNode
      }
      this.tail.next = newNode
      this.tail = newNode
      this.length ++;
    }
    pop(){
        if(!this.head){
            return undefined
        }

        let temp = this.head
        let prev = this.head

        while(temp.next){
            prev = temp
            temp = prev.next     
        }
        this.tail = prev
        this.tail.next = null
        this.length--;
         
        if(this.length === 0){
            this.head = null
            this.tail = null   
        }

        return temp

    }
    unshift(value){
      const newNode = new node(value)
      newNode.next = this.head
      this.head = newNode
      this.length ++
      return this;
    }
    shift(){
      let temp = this.head
      this.head = this.head.next
      temp.next = null
      this.length --

    }
    getFirst(){
      return this.head
    }
   getLast(){
    return this.tail
   }
}

const linkedlist = new LinkedList(1)
linkedlist.push(10)
// linkedlist.shift()
console.log(linkedlist)






