const db = require('../config/db');

const getAllFornecedores = async () => {
    let sql = `select * from fornecedores`;
    let fornecedores = {};

    await db.query(sql)
        .then(ret =>  fornecedores = { total: ret.rows.length, fornecedores: ret.rows })
        .catch(err => fornecedores = err.stack );

    return fornecedores;
}

const getFornecedorById = async (params) => {
    let sql = `select * from fornecedores where id = ${params.id}`;
    let fornecedor = {};

    await db.query(sql)
        .then(ret =>  fornecedor = { total: ret.rows.length, fornecedor : ret.rows })
        .catch(err => fornecedor = err.stack );

    return fornecedor;
}

const postFornecedores = async (params) => {
    params.map(fornecedor => insertFornecedor(fornecedor));
}

const insertFornecedor = async (fornecedor) => {
    let sql = `insert into fornecedores (
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
    const { nome, cpfcnpj, data_nascimento, telefone, celular, email, endereco, bairro, numero, complemento, cep, municipio, uf } = fornecedor;
    await db.query(sql, [nome, cpfcnpj, data_nascimento, telefone, celular, email, endereco, bairro, numero, complemento, cep, municipio, uf]);
}

const patchFornecedor = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e !== 'id' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update fornecedores set ${fields} where id =  ${params.id}`;
    await db.query(sql);
}

const deleteFornecedor = async (params) => {
    const sql = `delete from fornecedores where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllFornecedores = getAllFornecedores;
module.exports.postFornecedores = postFornecedores;
module.exports.patchFornecedor = patchFornecedor;
module.exports.deleteFornecedor = deleteFornecedor;
module.exports.getFornecedorById = getFornecedorById;
