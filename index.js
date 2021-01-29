const express = require('express');
const app = express();

app.use(express.json());

app.listen(8080,()=>{
    console.log('Server on port 8080');
});

app.all('/user',(req,res,next)=>{
    console.log('Por aqui paso');
    next();
});

app.get('/',(req,res)=>{
    res.send("Hola mundo!");
});

app.get('/about',(req,res)=>{
    res.send("Get recibido!");
});

app.post('/post',(req,res)=>{
    res.send("post recibido!");
});

app.put('/put',(req,res)=>{
    res.send("put recibido!");
});

app.delete('/delete',(req,res)=>{
    res.send("delete recibido!");
});

app.get('/user',(req,res)=>{
    res.json({
        "username":"Patricia",
        "email":"may.patrics@gmail.com"
    });
});

app.post('/user',(req,res)=>{
    console.log(req.body);
    res.send("Post user recibido!");
});

app.post('/user/:id',(req,res)=>{
    console.log(req.params.id);
    res.send("Post user id recibido!");
});
