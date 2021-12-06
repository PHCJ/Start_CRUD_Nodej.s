const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const port = 3000;
var consign = require('consign');
var path = require('path');


const app = express();
app.use(session({secret:'secreto'}));
app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/view'));
consign().include('controller/routes').into(app);

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/cadUser',(req,res)=>{
    res.render('cadUser');
})

app.get('/cadProd',(req,res)=>{
    res.render('cadProd');
})

app.get('/listProd',(req,res)=>{
    res.render('listProd');
})

app.get('/listUser',(req,res)=>{
    res.render('listUser');
})

app.listen(port,()=>{
    console.log('servidor rodando...');
})