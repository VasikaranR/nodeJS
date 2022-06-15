const fs = require('fs');

fs.watchFile('file-system/data.txt',()=>{
    console.log("somedata has changed ");
});