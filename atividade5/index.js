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

    if(data.datanascimento.length == 0){
        erro_form = true;
        campos_invalidos.push("Data de Nascimento")
    }

    if(data.telefone.length == 0){
        erro_form = true;
        campos_invalidos.push("Telefone")
    }

    if(data.cep.length == 0){
        erro_form = true;
        campos_invalidos.push("CEP")
    }

    if(data.endereco.length == 0){
        erro_form = true;
        campos_invalidos.push("Endereço")
    }

    if(data.clinica == "Nenhuma Selecionada"){
        erro_form = true;
        campos_invalidos.push("Clinica")
    }

    if(data.dataconsulta.length == 0){
        erro_form = true;
        campos_invalidos.push("Data da Consulta")
    }

    if(Date.parse(data.dataconsulta) <= Date.now()){
        campos_invalidos.push("Data da Consulta")
    }

    if(data.especialidade == "Nenhuma Selecionada"){
        erro_form = true;
        campos_invalidos.push("Especialidade")
    }

    if(data.horaconsulta.length == 0){
        erro_form = true;
        campos_invalidos.push("Hora da Consulta")
    }


    res.render('index.html', {erro_form, campos_invalidos, data});
})

app.listen(PORT, () => console.log(`Iniciando servidor na porta ${PORT}`))