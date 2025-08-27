const arr = [1,2,6,24,9,12,13,19]

for(let i=0; i<arr.length; i++){
     if(arr[i]%2==0){
       console.log(arr[i])
     }
}

const persons = [
    {
    firstName:'Abhay',
    gender:'male'
},{
    firstName:'Chirag',
    gender:'male'
},{
    firstName:'Taniya',
    gender:'female'
},
 {
    firstName:'Alisha',
    gender:'female'
 },{
    firstName:"OM",
    gender:'not clear'
 } 

]



for (let i = 0; i < persons.length; i++) {
  if (persons[i].gender === 'male') {
    console.log(persons[i].firstName);
  }
}





let biggestNumber=0;
for(let i=0; i<arr.length; i++){
   if(arr[i]>biggestNumber){
      biggestNumber = arr[i]
   }
}
console.log(biggestNumber);





/// Callbacks 

function calculateArithmetic(a,b,operations){
     let answer = operations(a,b)
     return answer                                                       
}

function sum(a,b){
    return a + b;
}

function sub(a,b){
   return a - b
}

const result = calculateArithmetic(3,7,sub)
console.log(result)



