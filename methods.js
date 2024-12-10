// function reverseArray(arr) {
//     let length = arr.length;

//     for (let i = 0; i < Math.floor(length / 2); i++) {
//         let temp = arr[i];
//         arr[i] = arr[length - 1 - i];
//         arr[length - 1 - i] = temp;
//     }

//     return arr;
// }

// // Test the function
// let numbers = [1, 2, 3, 4, 5];
// console.log(reverseArray(numbers)); // Output: [5, 4, 3, 2, 1]




function ReverseString (data){
   const newData = data.split("").reverse().join('')
   console.log(newData)
}

ReverseString('sos')


function isPalindrome(name){
   const newData = name.split("").reverse().join('')
   if(name === newData){
    console.log('Its Palindrome')
   }else{
    console.log('Its not palindrome')
   }
}


isPalindrome('sos')



// Int Reversal 

function ReverseInt (num){
    const myNum = String(num)
    const reversed = myNum.split("").reverse().join('')
    const result = Number(reversed)
    console.log('This is reversed Number', result)
}

ReverseInt(12334)


// Sentence Capitalization 


function sentencCapitalize(fname,lname){
    const fchar = fname.split('')[0] 
    const lchar = lname.split('')[0]
    const fsplit =  fname.split('')
    const lsplit = lname.split('')
     fsplit.splice(0,1)
     lsplit.splice(0,1)
    const firstName = fchar.toUpperCase() + fsplit.join('')
    const lastName = lchar.toUpperCase() + lsplit.join('')
    console.log(firstName + " " +lastName)
   }

sentencCapitalize('deep','verma')