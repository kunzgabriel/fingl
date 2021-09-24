let titulosService = require('../services/titulos');

const postTitulos = async (req, res, next) => {
    try {
        await titulosService.postTitulos(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getAllTitulos = async (req, res, next) => {
    try {
        await titulosService.getAllTitulos()
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getTituloById = async (req, res, next) => {
    try {
        await titulosService.getTituloById(req.params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const patchTitulo = async (req, res, next) => {
    try {
        await titulosService.patchTitulo(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const deleteTitulo = async (req, res, next) => {
    try {
        await titulosService.deleteTitulo(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

module.exports.getAllTitulos = getAllTitulos;
module.exports.postTitulos = postTitulos;
module.exports.patchTitulo = patchTitulo;
module.exports.deleteTitulo = deleteTitulo;
module.exports.getTituloById = getTituloById;