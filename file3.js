const fs = require('fs');

fs.copyFileSync('data.txt','data.bak.txt');

fs.renameSync('data.bak.txt','data.old.txt');

fs.unlinkSync('data.old.txt');