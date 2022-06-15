const dns= require('dns');

// dns.lookup('google.com',(err,value)=>{
//    if(err){
//     console.log(err);
//     return;
//    }
//    console.log(value);
// });

dns.resolve('google.com',(err,value)=>{
    if(err){
     console.log(err);
     return;
    }
    console.log(value);
 });