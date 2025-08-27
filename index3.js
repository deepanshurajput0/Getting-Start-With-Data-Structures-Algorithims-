const fs = require('fs')

fs.writeFile('note.txt','This is my new file',(err,data)=>{
   if(err){
    console.log(err)
   }
})

fs.readFile('note.txt','utf-8',(err,data)=>{
   if(err){
    console.log(err)
   }else{
    console.log(data)
   }
})


fs.appendFile('note.txt','\nNew line',(err)=>{
   if(err) throw err;
})


fs.unlink('note.txt',(err)=>{
   if(err) throw err
})


fs.mkdir('newFolder',(err)=>{
    if(err) throw err
    fs.writeFile('newFolder/note2.txt','this is new file',(err)=>{
       if(err) throw err 
    })
})





