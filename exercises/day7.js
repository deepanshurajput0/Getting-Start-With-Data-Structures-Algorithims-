/// printing patterns 


for(let i=1; i<=5; i++){
   let start = ' '
   for(let j=1; j<=i; j++){
      start = start + '*'
   }
   console.log(start)
}


// Left Triangular Star Pattern

let num=5
let pattern = ""
for(let i=1; i<=num; i++){
   pattern = ""
    for(let j=0; j<=(num-i); j++){
      pattern = pattern + "*"
    }
    console.log(pattern)
   }




   // Calculate the Total Price of Groceries




   function getTotalPrice (groceries){
      let subTotal = 0
       for(let i=0; i<groceries.length; i++){
          const productPrice = groceries[i].quantity * groceries[i].price
          subTotal = subTotal + productPrice
       }
       console.log(subTotal)
   }


   const myGroceries = [
      { product: "Milk", quantity: 1, price: 100 },
      { product: "Cereals", quantity: 1, price: 150 },
      { product: "Eggs", quantity: 12, price: 60 },
      { product: "Bread", quantity: 2, price: 30 },
      { product: "Cheese", quantity: 1, price: 130 }
   ]

   getTotalPrice(myGroceries)




   // Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.


   function getFrequencies(myArr) {
      const frequencies = {}; 
  
      for (let i = 0; i < myArr.length; i++) {
          const element = myArr[i];

          if (frequencies[element]) {
              frequencies[element]++;
          } else {
              
              frequencies[element] = 1;
          }
      }
  
      return frequencies; 
  }
  

  const result = getFrequencies([1,1,2,3,3,3]);
  console.log(result);
  






