const calc = require('./util/calculadora');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let html = '<h1>Calculadora</h1>';
    html += '<h3>Rotas da aplicação:</h3>';
    html += '<p>/somar/:a/:b</p>';
    html += '<p>/subtrair/:a/:b</p>';
    html += '<p>/multiplicar/:a/:b</p>';
    html += '<p>/dividir/:a/:b</p>';
    res.send(html);
});

app.get('/somar/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    
    res.send(`<h1>${a} + ${b} = ${calc.somar(a, b)}</h1>`)
})

app.get('/subtrair/:a/:b', (req, res) => {
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    
    res.send(`<h1>${a} - ${b} = ${calc.subtrair(a, b)}</h1>`);
})

app.get('/multiplicar/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    res.send(`<h1>${a} * ${b} = ${calc.multiplicar(a, b)}</h1>`);
})

app.get('/dividir/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    res.send(`<h1>${a} / ${b} = ${calc.dividir(a, b)}</h1>`);
})

const PORT = 8080
app.listen(PORT, 'localhost', ()=>{
    console.log(`Bem vindo ao server! Rodando na porta ${PORT}`)
})
