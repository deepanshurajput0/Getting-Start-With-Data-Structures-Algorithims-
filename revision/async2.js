import * as fs from 'node:fs';

fs.readFile("revision\\a.txt", "utf-8", function(err, data) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data)
});

console.log("hi there");

let a = 0;
for(let i = 0; i < 1000000; i++){
    a++
}

console.log('hi there 2');
