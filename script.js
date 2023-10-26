const express = require('express');
const app = express();

app.set("view engine","ejs");
app.use(express.static('./public'));

app.use((req,res,next)=>{
    console.log("server running");
    next();
})
app.get('/',function(req,res){
    res.render('index');
})

app.get('/profile',(req,res)=>{
    res.send('ram ram bhai sareyane')
})

//dynamic routing
app.get('/profile/:username',(req,res)=>{
    res.send(`hello from ${req.params.username}`);
})

app.listen(3000);