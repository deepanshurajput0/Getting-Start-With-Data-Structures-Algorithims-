// Re-cursion
// when a function continuosly call itslef 


function Count(x){
    console.log(x)
      if(x<10){
         Count(x+1)
      } 
}

Count(0)


