let money = 100;
let totalApple =0;

function buyApple(x){
   console.warn('I have ', x , 'RS', totalApple)
   if(x>0){
    buyMore(x)
   }else{
    console.log('I don"t have more money', totalApple)
   }
   
}

function buyMore(x){
    totalApple++ 
    x = x - 10
    buyApple(x)
}

buyApple(money);

