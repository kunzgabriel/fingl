const titulosLancamentosController = require('../controllers/titulosLancamentos');

module.exports = (app) => {
    app.get('/titulosLancamentos', titulosLancamentosController.getAllTitulosLancamentos)
    app.get('/titulosLancamentos/:id', titulosLancamentosController.getTitulosLancamentoById)
    app.post('/titulosLancamentos', titulosLancamentosController.postTitulosLancamentos)
    app.patch('/titulosLancamentos', titulosLancamentosController.patchTituloLancamento)
    app.delete('/titulosLancamentos/:id', titulosLancamentosController.deleteTituloLancamento)
}