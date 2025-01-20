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




  