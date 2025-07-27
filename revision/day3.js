// make function in object 

const myIntro = {
    name:'Deepanshu',
    age:19,
    about: function(){
        console.log(`My Name is ${this.about.apply.name} And age is ${this.age}`)
    }
}

myIntro.about()



