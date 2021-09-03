const fornecedoresController = require('../controllers/fornecedores');

module.exports = (app) => {
    app.get('/fornecedores', fornecedoresController.getAllFornecedores)
    app.post('/fornecedores', fornecedoresController.postFornecedores)
}