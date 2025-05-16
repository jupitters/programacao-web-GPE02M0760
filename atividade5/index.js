const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express()
const PORT = 8080;

app.engine('html', mustacheExpress());
app.set('view-engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res)=>{
    res.render('index.html');
})

app.post('/agendar-consulta', (req, res)=> {
    
})

app.listen(PORT, ()=>{
    console.log(`Iniciando servidor na porta ${PORT}`);
})