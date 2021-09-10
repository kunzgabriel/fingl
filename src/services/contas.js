const db = require('../config/db');

const getAllContas = async () => {
    let sql = `select * from contas`;
    let contas = {};

    await db.query(sql)
        .then(ret =>  contas = { total: ret.rows.length, contas: ret.rows })
        .catch(err => contas = err.stack );

    return contas;
}

const getContaById = async (params) => {
    let sql = `select * from contas where id = ${params.id}`;
    let conta = {};

    await db.query(sql)
        .then(ret =>  conta = { total: ret.rows.length, conta : ret.rows })
        .catch(err => conta = err.stack );

    return conta;
}

const postContas = async (params) => {
    params.map(conta => insertConta(conta));
}

const insertConta = async (conta) => {
    let sql = `insert into contas (
        descricao,
        saldo
    ) values ($1, $2)`;
    const { descricao, saldo } = conta;
    await db.query(sql, [descricao, saldo]);
}

const patchConta = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e !== 'id' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update contas set ${fields} where id =  ${params.id}`;
    await db.query(sql);
}

const deleteConta = async (params) => {
    const sql = `delete from contas where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllContas = getAllContas;
module.exports.postContas = postContas;
module.exports.patchConta = patchConta;
module.exports.deleteConta = deleteConta;
module.exports.getContaById = getContaById;
