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


fs.readdir('newFolder',(err,data)=>{
   if(err)throw err
   else console.log(data)
})



//// ------------------ Streams -------------------------------


// Streams in Node.js handle data in chunks instead of loading the entire file into memory. Useful for large files or real-time data because memory stays low and processing starts immediately.

const readStream = fs.createReadStream('bigFile.txt','utf-8')
readStream.on('data',(chunk)=>{
   console.log('New chunk received')
   console.log(chunk)
})

readStream.on('end',()=>{
    console.log('no more data')
})

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('First line\n');
writeStream.write('Second line\n');
writeStream.end(); // Close the stream
