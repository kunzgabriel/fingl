let fornecedoresService = require('../services/fornecedores');

const postFornecedores = async (req, res, next) => {
    try {
        await fornecedoresService.postFornecedores(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getAllFornecedores = async (req, res, next) => {
    try {
        await fornecedoresService.getAllFornecedores()
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getFornecedorById = async (req, res, next) => {
    try {
        await fornecedoresService.getFornecedorById(req.params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const patchFornecedor = async (req, res, next) => {
    try {
        await fornecedoresService.patchFornecedor(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const deleteFornecedor = async (req, res, next) => {
    try {
        await fornecedoresService.deleteFornecedor(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

module.exports.getAllFornecedores = getAllFornecedores;
module.exports.postFornecedores = postFornecedores;
module.exports.patchFornecedor = patchFornecedor;
module.exports.deleteFornecedor = deleteFornecedor;
module.exports.getFornecedorById = getFornecedorById;
