const tabelaContabilController = require('../controllers/tabelaContabil');

module.exports = (app) => {
    app.get('/tabelaContabil', tabelaContabilController.getAllTabelaContabil)
    app.get('/tabelaContabil/:id', tabelaContabilController.getTabelaContabilById)
    app.post('/tabelaContabil', tabelaContabilController.postTabelaContabil)
    app.patch('/tabelaContabil', tabelaContabilController.patchTabelaContabil)
    app.delete('/tabelaContabil/:id', tabelaContabilController.deleteTabelaContabil)
}