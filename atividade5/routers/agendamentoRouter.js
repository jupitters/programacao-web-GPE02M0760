const express = require('express')
const router = express.Router();
const agendamentoController = require('../controller/agendamentoController')

router.get('/', agendamentoController.getIndexView);
router.get('/agendamentos', agendamentoController.getAgendamentosView);
router.post('/agendar_consulta', agendamentoController.postAgendarConsulta);

module.exports = router;