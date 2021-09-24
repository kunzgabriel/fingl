const titulosController = require('../controllers/titulos');

module.exports = (app) => {
    app.get('/titulos', titulosController.getAllTitulos)
    app.get('/titulos/:id', titulosController.getTituloById)
    app.post('/titulos', titulosController.postTitulos)
    app.patch('/titulos', titulosController.patchTitulo)
    app.delete('/titulos/:id', titulosController.deleteTitulo)
}