const express = require('express');
const mustacheExpress = require('mustache-express');
const agendamentoRouter = require('./routers/agendamentoRouter')

const app = express()
const PORT = 8080;

app.engine('html', mustacheExpress());
app.set('view-engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.use('/', agendamentoRouter);

app.listen(PORT, () => console.log(`Iniciando servidor na porta ${PORT}`))