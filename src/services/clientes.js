const db = require('../config/db');

const getAllClientes = async () => {
    let sql = `select * from clientes`;
    let clientes = {};

    await db.query(sql)
        .then(ret =>  clientes = { total: ret.rows.length, clientes: ret.rows })
        .catch(err => clientes = err.stack );

    return clientes;
}

const getClienteById = async (params) => {
    let sql = `select * from clientes where id = ${params.id}`;
    let cliente = {};

    await db.query(sql)
        .then(ret =>  cliente = { total: ret.rows.length, cliente   : ret.rows })
        .catch(err => cliente = err.stack );

    return cliente;
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

const patchCliente = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e !== 'id' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update clientes set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

const deleteCliente = async (params) => {
    const sql = `delete from clientes where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllClientes = getAllClientes;
module.exports.postClientes = postClientes;
module.exports.patchCliente = patchCliente;
module.exports.deleteCliente = deleteCliente;
module.exports.getClienteById = getClienteById;
