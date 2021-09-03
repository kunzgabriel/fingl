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

module.exports.getAllClientes = getAllClientes;
module.exports.postClientes = postClientes;