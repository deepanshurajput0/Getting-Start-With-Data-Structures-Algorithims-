// Data Structure
const students = ['abhay','chirag','vivek','insan','shivam']

// Algorithim 
function getStudent(students, studentName){
     for(let i=0; i<students.length; i++){
        if(students[i] === studentName){
            console.log('Its present')
        }else{
            console.log('not present')
        }
     }
}


getStudent(students,'shiva')