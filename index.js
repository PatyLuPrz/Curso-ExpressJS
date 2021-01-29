const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings
app.set('appName','Curso de Express');
app.set('port','8080');
app.set('view engine','ejs');


// Middlewares
function logger(req,res,next){
    console.log(`Route Recived: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(express.json());
app.use(morgan('dev'));

app.listen(app.get('port'),()=>{
    console.log(app.get('appName'));
    console.log('Server on port: ',app.get('port'));
});

// Routes

app.all('/user',(req,res,next)=>{
    console.log('Por aqui paso');
    next();
});


app.get('/about',(req,res)=>{
    const data = [{'nombre':'patricia','correo':'may.patrics@gmail.com'},{'nombre':'mayra','correo':'may.patrics@gmail.com'}];
    res.render('index.ejs',{personas:data});
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

app.use(express.static('public'));