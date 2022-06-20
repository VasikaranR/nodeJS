const express = require('express');
const router =express.Router();



router.get('/time',(req ,res,next)=>{
    res.json({
        time: new Date().toISOString()
    });
});

// router.get('/:person/:greetings',(req,res,next)=>{
//     //hello?name=vasi when you use query
//     // hello/:person
//     // const name =req.params.person;
//     // const greetings= req.params.greetings;
//      const name= req.params.person;
//      const greetings = req.params.greetings;
//     // res.send(name +greetings)
//     res.render('hello',{name :name ,greetings :greetings});
     

// });

 router.get('/:name/:greetings',(req,res,next)=>{
        const name =req.params.name
        const greetings= req.params.greetings
         res.render('hello',{name:name,greetings:greetings})
 })
router.all

module.exports = router; 