const express = require('express');
const calc = require('./calculadora');

const app = express();
const PORT = 8080;

app.get('/', (req, res)=>{
    res.send("Olá, Mundo!");
    res.writeHead(200, {'COntent-Type': 'text/plain'});
});

app.get('/ola/:nome', (req, res)=>{
    res.send(`Olá, ${req.params.nome}"`);
})

app.listen(PORT, ()=>{
   console.log('Rodando na porta '+ PORT);
})
