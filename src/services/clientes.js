const db = require('../config/db');

const getAllClientes = async () => {
    let sql = `select * from clientes`;
    let clientes = {};

    await db.query(sql)
        .then(ret =>  clientes = { total: ret.rows.length, clientes: ret.rows })
        .catch(err => clientes = err.stack );

    return clientes;
}

const postClientes = async (params) => {
    params.map(cliente => insertCliente(cliente));
}

const insertCliente = async (cliente) => {
    let sql = `insert into clientes (
        nome,
        cpfcnpj,
        data_nascimento,
        telefone,
        celular,
        email,
        endereco,
        bairro,
        numero,
        complemento,
        cep,
        municipio,
        uf
        ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
    const { nome, cpfcnpj, data_nascimento, telefone, celular, email, endereco, bairro, numero, complemento, cep, municipio, uf } = cliente;
    await db.query(sql, [nome, cpfcnpj, data_nascimento, telefone, celular, email, endereco, bairro, numero, complemento, cep, municipio, uf]);
}

module.exports.getAllClientes = getAllClientes;
module.exports.postClientes = postClientes;
