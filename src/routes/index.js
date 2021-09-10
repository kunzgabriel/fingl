const clientes = require('./clientes');
const fornecedores = require('./fornecedores')
const contas = require('./contas')
const tabelaContabil = require('./tabelaContabil')

module.exports = (app) => {
    clientes(app)
    fornecedores(app)
    contas(app)
    tabelaContabil(app)
}