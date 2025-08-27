const path = require('path');


const fullPath = path.join('newFolder','note2.txt')

console.log(fullPath)

const absolutePath = path.resolve('newFolder','note2.txt')

console.log(absolutePath)


const ext = path.basename('newFolder/note2.txt')
const dirname = path.dirname('newFolder/note2.txt')
console.log(ext)
console.log(dirname)
// Gives filename with extension. 