const http = require('http');

const server=http.createServer(
  (request,result)=>{
     const name =request.url.slice(2);
     result.writeHead(200,{'content-type':'text/html'});
     result.end(`<h1>HELOOO ${name} ANGULARIAN</h1>`);
  }
);

server.listen('8080','localhost');