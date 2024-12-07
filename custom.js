// creating own arrays 

class MyArray {
    constructor(){
        this.length = 0;
        this.data ={}
    }
    push(item){
      this.data[this.length] = item
      this.length++
      return this.length
    }
    get(value){
      return this.data[value] 
    }
    pop(){
       const lastIndex = this.length - 1
       const item = this.data[lastIndex]
       delete this.data[lastIndex]
       this.length --
       return item
    }
}


const myNewArray = new MyArray()
myNewArray.push('deepanshu')
myNewArray.push('shivam')
myNewArray.pop()
console.log(myNewArray)

