const clientes = require('./clientes');
const fornecedores = require('./fornecedores')

module.exports = (app) => {
    clientes(app)
    fornecedores(app)
}