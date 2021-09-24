let titulosLancamentosService = require('../services/titulosLancamentos');

const postTitulosLancamentos = async (req, res, next) => {
    try {
        await titulosLancamentosService.postTitulosLancamentos(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getAllTitulosLancamentos = async (req, res, next) => {
    try {
        await titulosLancamentosService.getAllTitulosLancamentos()
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getTitulosLancamentoById = async (req, res, next) => {
    try {
        await titulosLancamentosService.getTitulosLancamentoById(req.params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const patchTituloLancamento = async (req, res, next) => {
    try {
        await titulosLancamentosService.patchTituloLancamentoLancamento(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const deleteTituloLancamento = async (req, res, next) => {
    try {
        await titulosLancamentosService.deleteTituloLancamento(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

module.exports.getAllTitulosLancamentos = getAllTitulosLancamentos;
module.exports.postTitulosLancamentos = postTitulosLancamentos;
module.exports.patchTituloLancamento = patchTituloLancamento;
module.exports.deleteTituloLancamento = deleteTituloLancamento;
module.exports.getTitulosLancamentoById = getTitulosLancamentoById;