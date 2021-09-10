const contasController = require('../controllers/contas');

module.exports = (app) => {
    app.get('/contas', contasController.getAllContas)
    app.get('/contas/:id', contasController.getContaById)
    app.post('/contas', contasController.postContas)
    app.patch('/contas', contasController.patchConta)
    app.delete('/contas/:id', contasController.deleteConta)
}