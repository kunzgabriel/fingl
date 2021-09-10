const clientesController = require('../controllers/clientes');

module.exports = (app) => {
    app.get('/clientes', clientesController.getAllClientes)
    app.get('/clientes/:id', clientesController.getClienteById)
    app.post('/clientes', clientesController.postClientes)
    app.patch('/clientes', clientesController.patchCliente)
    app.delete('/clientes/:id', clientesController.deleteCliente)
}