const clientes = require('./clientes');
const fornecedores = require('./fornecedores')
const contas = require('./contas')
const tabelaContabil = require('./tabelaContabil');
const titulos = require('./titulos');
const titulosLancamentos = require('./titulosLancamentos');

module.exports = (app) => {
    clientes(app)
    fornecedores(app)
    contas(app)
    tabelaContabil(app)
    titulos(app)
    titulosLancamentos(app)
}