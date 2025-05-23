const express = require('express');
const mustacheExpress = require('mustache-express');
const agendamentoController = require('./controller/agendamentoController')
const app = express()
const PORT = 8080;

app.engine('html', mustacheExpress());
app.set('view-engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', agendamentoController.getIndexView())
app.post('/agendar_consulta', agendamentoController.postAgendarConsulta())

app.listen(PORT, () => console.log(`Iniciando servidor na porta ${PORT}`))