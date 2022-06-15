const express = require('express');
const router =express.Router();

router.get('/:person/:greetings',(req,res,next)=>{
    //hello?name=vasi when you use query
    // hello/:person
    const name =req.params.person;
    const greetings= req.params.greetings;
    res.render('hello',{name :name ,greetings :greetings});
});

module.exports = router; 