const data = [ 20, 30, 10, 5, 50, 100]

let element = 45
let index = undefined
for(let i=0; i<data.length; i++){
    if(data[i] === element){
       index = i
       console.log('Its present')
       break;
    }
}
