
const fs= require('fs');

let hello=fs.watch('file-system/data.txt');

hello.on('change',()=>{
    console.log("the document has changed ");
})