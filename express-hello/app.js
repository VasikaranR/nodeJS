const express = require('express');
const app =express();

app.get('/', (req,res)=>res.send('hello world'));
app.get('/login', (req,res)=>res.send('login page'));
app.get('/register', (req,res)=>res.send('register page'));
app.listen(3000, ()=>console.log('app listening for a connection'))