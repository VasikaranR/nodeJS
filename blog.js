const fs= require('fs');
const readline= require('readline');

const rl=readline.createInterface({

    input:process.stdin,
    output:process.stdout
});

const file='myblog.txt';
const author =process.argv[2] || 'unknown';
const title = process.argv[3]||'new blog post';

rl.question('enter your blog post: ',(postcontent)=>{
    const blogEntry=1
`${'-'.repeat(title.length)}
 ${title}
 ${'-'.repeat(title.length)}
 by ${author}on ${new Date()}
 ${postcontent}
    `;

    fs.appendFile(file,blogEntry,(err)=>{
        if(err){
            console.log("there was a error in");
            throw err;
        }
        console.log('the blog post was created ');
        
    });


r1.close();
});