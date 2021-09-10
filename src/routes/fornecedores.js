const fornecedoresController = require('../controllers/fornecedores');

module.exports = (app) => {
    app.get('/fornecedores', fornecedoresController.getAllFornecedores)
    app.get('/fornecedores/:id', fornecedoresController.getFornecedorById)
    app.post('/fornecedores', fornecedoresController.postFornecedores)
    app.patch('/fornecedores', fornecedoresController.patchFornecedor)
    app.delete('/fornecedores/:id', fornecedoresController.deleteFornecedor)
}