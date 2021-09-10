let tabelaContabilService = require('../services/tabelaContabil');

const postTabelaContabil = async (req, res, next) => {
    try {
        await tabelaContabilService.postTabelaContabil(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getAllTabelaContabil = async (req, res, next) => {
    try {
        await tabelaContabilService.getAllTabelaContabil()
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getTabelaContabilById = async (req, res, next) => {
    try {
        await tabelaContabilService.getTabelaContabilById(req.params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const patchTabelaContabil = async (req, res, next) => {
    try {
        await tabelaContabilService.patchTabelaContabil(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const deleteTabelaContabil = async (req, res, next) => {
    try {
        await tabelaContabilService.deleteTabelaContabil(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

module.exports.getAllTabelaContabil = getAllTabelaContabil;
module.exports.postTabelaContabil = postTabelaContabil;
module.exports.patchTabelaContabil = patchTabelaContabil;
module.exports.deleteTabelaContabil = deleteTabelaContabil;
module.exports.getTabelaContabilById = getTabelaContabilById;