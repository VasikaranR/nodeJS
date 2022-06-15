const net =require('net');

const client = net.createConnection({
    port:8080,
});

client.on('data', (data) =>{
    console.log(`the message received from the server ${data}`);
})