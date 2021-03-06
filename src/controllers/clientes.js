let clientesService = require('../services/clientes');

const postClientes = async (req, res, next) => {
    try {
        await clientesService.postClientes(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getAllClientes = async (req, res, next) => {
    try {
        await clientesService.getAllClientes()
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getClienteById = async (req, res, next) => {
    try {
        await clientesService.getClienteById(req.params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const patchCliente = async (req, res, next) => {
    try {
        await clientesService.patchCliente(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const deleteCliente = async (req, res, next) => {
    try {
        await clientesService.deleteCliente(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

module.exports.getAllClientes = getAllClientes;
module.exports.postClientes = postClientes;
module.exports.patchCliente = patchCliente;
module.exports.deleteCliente = deleteCliente;
module.exports.getClienteById = getClienteById;