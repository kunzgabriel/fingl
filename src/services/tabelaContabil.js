const db = require('../config/db');

const getAllTabelaContabil = async () => {
    let sql = `select * from tabela_contabil`;
    let tabelaContabil = {};

    await db.query(sql)
        .then(ret =>  tabelaContabil = { total: ret.rows.length, tabelaContabil: ret.rows })
        .catch(err => tabelaContabil = err.stack );

    return tabelaContabil;
}

const getTabelaContabilById = async (params) => {
    let sql = `select * from tabela_contabil where id = ${params.id}`;
    let tabelaContabil = {};

    await db.query(sql)
        .then(ret =>  tabelaContabil = { total: ret.rows.length, tabelaContabil : ret.rows })
        .catch(err => tabelaContabil = err.stack );

    return tabelaContabil;
}

const postTabelaContabil = async (params) => {
    params.map(tabelaContabil => insertTabelaContabil(tabelaContabil));
}

const insertTabelaContabil = async (tabelaContabil) => {
    let sql = `insert into tabela_contabil (
        descricao,
        conta_credito,
        conta_debito
    ) values ($1, $2, $3)`;
    const { descricao, conta_credito, conta_debito } = tabelaContabil;
    await db.query(sql, [descricao, conta_credito, conta_debito]);
}

const patchTabelaContabil = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e !== 'id' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update tabela_contabil set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

const deleteTabelaContabil = async (params) => {
    const sql = `delete from tabela_contabil where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllTabelaContabil = getAllTabelaContabil;
module.exports.postTabelaContabil = postTabelaContabil;
module.exports.patchTabelaContabil = patchTabelaContabil;
module.exports.deleteTabelaContabil = deleteTabelaContabil;
module.exports.getTabelaContabilById = getTabelaContabilById;
