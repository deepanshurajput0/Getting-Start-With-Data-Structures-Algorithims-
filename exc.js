const students = ['abhay','chirag','vivek','insan','shivam']


function getStudent(students, studentName){
     const student = students.find((item,i)=>item === studentName)
     if(student){
        console.log(student)
     }else{
        console.log('Student is not present')
     }
}

getStudent(students,'shivam')