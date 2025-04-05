const express = require('express');
const estoque = require('./util/estoque');
const app = express();
const PORT=8080;

app.get('/', (req, res)=>{
    let html = '<h1>API estoque<h1>';
    html += '<h3>Rotas disponiveis:</h3>';
    html += '/adicionar/:id/:nome/:qtd - Adiciona um novo produto ao estoque<br>';
    html += '/listar - Lista todos os produtos do estoque<br>';
    html += '/remover/:id - Remove um produto do estoque<br>';
    html += '/editar/:id/:qtd - Altera a quantidade de um produto do estoque<br>';
    res.send(html);
});

app.get('/adicionar/:id/:nome/:qtd', (req, res)=>{
    let id = Number(req.params.id);
    let nome = String(req.params.nome);
    let qtd = Number(req.params.qtd);

    const item = {
        id: id,
        nome: nome,
        qtd: qtd
    }

    if(estoque.adicionar(item)) {
        html = '<h3>Item adicionado à lista</h3>';
        res.send(html);
    } else {
        html = '<h3>Não foi possivel adicionar item à lista</h3>';
        res.send(html);
    }

    
})

app.get('/listar', (req, res)=>{
    res.send(estoque.listar());
})

app.get('/remover/:id', (req, res)=>{
    id = Number(req.params.id);
    if(estoque.remover(id)) {
        html = '<h3>Item removido com sucesso</h3>';
        res.send(html);
    } else {
        html = '<h3>Não foi possivel remover item.</h3>';
        res.send(html);
    }
})

app.get('/editar/:id/:qtd', (req, res)=>{
    id = Number(req.params.id);
    qtd = Number(req.params.qtd);
    if(estoque.editar(id, qtd)) {
        html = '<h3>Item editado com sucesso</h3>';
        res.send(html);
    } else {
        html = '<h3>Não foi possivel editar item.</h3>';
        res.send(html);
    }
})

app.listen(PORT, 'localhost', (req, res)=>{
    console.log(`Server rodando na porta ${PORT}`);
})