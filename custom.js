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
    shift(){
     const firstItem = this.data[0]
     for(let i=0; i<this.length; i++){
         this.data[i] = this.data[i+1]
     }
     delete this.data[this.length-1]
     this.length --
     return firstItem
    }
}


const myNewArray = new MyArray()
myNewArray.push('deepanshu')
myNewArray.push('shivam')
myNewArray.push('insan')
myNewArray.shift()
console.log(myNewArray)

