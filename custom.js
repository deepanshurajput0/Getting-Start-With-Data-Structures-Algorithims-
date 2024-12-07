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
}


const myNewArray = new MyArray()
myNewArray.push('deepanshu')
myNewArray.push('shivam')
console.log(myNewArray.get(1))


