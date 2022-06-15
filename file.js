const fs= require('fs');

const data = fs.readFileSync('system.js');
console.log(data.toString());