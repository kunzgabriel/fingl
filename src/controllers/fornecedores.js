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

module.exports.getAllFornecedores = getAllFornecedores;
module.exports.postFornecedores = postFornecedores;