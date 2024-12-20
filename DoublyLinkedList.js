class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode; 
        }
        this.length++; 
        return this;
    }
    pop(){
        let temp = this.tail
        if(this.length ===0){
            return undefined
        }
        if(!this.length === 1){
            this.head = null
            this.tail = null
        }
        this.tail = this.tail.prev
        this.tail.next = null
        temp.prev = null
        this.length--
        return temp
    }
    unshift(value){
        const newNode = new Node(value)
      if(!this.head){
        this.head = newNode
        this.tail = newNode
      }else{
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
      }
    }
}

const myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
// myDoublyLinkedList.pop()
myDoublyLinkedList.unshift(10)
console.log(myDoublyLinkedList);



