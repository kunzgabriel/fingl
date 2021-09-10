let contasService = require('../services/contas');

const postContas = async (req, res, next) => {
    try {
        await contasService.postContas(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getAllContas = async (req, res, next) => {
    try {
        await contasService.getAllContas()
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getContaById = async (req, res, next) => {
    try {
        await contasService.getContaById(req.params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const patchConta = async (req, res, next) => {
    try {
        await contasService.patchConta(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const deleteConta = async (req, res, next) => {
    try {
        await contasService.deleteConta(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

module.exports.getAllContas = getAllContas;
module.exports.postContas = postContas;
module.exports.patchConta = patchConta;
module.exports.deleteConta = deleteConta;
module.exports.getContaById = getContaById;