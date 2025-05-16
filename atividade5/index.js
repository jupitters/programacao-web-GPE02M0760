const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express()
const PORT = 8080;

app.engine('html', mustacheExpress());
app.set('view-engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.render('index.html');
})

app.post('/agendar_consulta', (req, res)=> {
    let data = req.body;
    let erro_form = false;
    let campos_invalidos = [];

    if(data.nome.length == 0){
        erro_form = true;
        campos_invalidos.push("Nome")
    }

    if(data.sobrenome.length == 0){
        erro_form = true;
        campos_invalidos.push("Sobrenome")
    }

    if(data.cpf.length == 0){
        erro_form = true;
        campos_invalidos.push("CPF")
    }


    res.render('index.html', {erro_form, campos_invalidos, data});
})

app.listen(PORT, () => console.log(`Iniciando servidor na porta ${PORT}`))