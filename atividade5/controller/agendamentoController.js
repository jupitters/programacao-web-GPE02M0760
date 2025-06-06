const agendamentoConsulta = require('../models/agendamentoConsultaModel');

const getIndexView = (req, res) => res.render('index.html');

const postAgendarConsulta = (req, res) => {
    let data = req.body;
    let erro_form = false;
    campos_invalidos = validarDados(data)

    if(campos_invalidos.length == 0){
        agendamentoConsulta.create(data).then(() => {
            res.redirect('/agendamentos');
        }) ;
    }
    else{
        res.render('index.html', {erro_form, campos_invalidos, data});
    }

}

module.exports = {
    getIndexView,
    postAgendarConsulta,
}

const validarDados = (data) => {
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

    return campos_invalidos;
}
