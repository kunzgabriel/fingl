const clientesController = require('../controllers/clientes');

module.exports = (app) => {
    app.get('/clientes', clientesController.getAllClientes)
    app.post('/clientes', clientesController.postClientes)
}