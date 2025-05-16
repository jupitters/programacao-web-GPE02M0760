// npm init
// npm install express@4.21.2
// npm install mustache-express@1.3.2  

const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const PORT = 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/ola/:nome', (req, res)=>{
    let nome = req.params.nome;
    res.render('index.html', {nome});
})

app.get('/contato', (req,res)=>{
    res.render('contato.html');
})

app.listen(PORT, ()=>{
    console.log(`Iniciando servidor na porta ${PORT}`);
})