const http = require('http');
const fs= require('fs');

// const server = http.createServer( 
//     (request,result)=> {
//         fs.readFile('hello.html',(err,data)=>{
//             if(err) throw err;
//              result.end(data);
//         });
//     });

// server.listen(8080,'localhost');

const server = http.createServer(
    (request,result)=>{
        const file= fs.createReadStream('hello.html');
        file.pipe(result)
    });
    server.listen(8080,'localhost');