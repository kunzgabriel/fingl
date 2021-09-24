const db = require('../config/db');

const getAllTitulosLancamentos = async () => {
    let sql = `select * from titulos_lancamentos`;
    let titulosLancamentos = {};

    await db.query(sql)
        .then(ret =>  titulosLancamentos = { total: ret.rows.length, titulosLancamentos: ret.rows })
        .catch(err => titulosLancamentos = err.stack );

    return titulosLancamentos;
}

const getTitulosLancamentoById = async (params) => {
    let sql = `select * from titulos_lancamentos where id = ${params.id}`;
    let tituloLancamento = {};

    await db.query(sql)
        .then(ret =>  tituloLancamento = { total: ret.rows.length, tituloLancamento : ret.rows })
        .catch(err => tituloLancamento = err.stack );

    return tituloLancamento;
}

const postTitulosLancamentos = async (params) => {
    params.map(tituloLancamento => insertTituloLancamento(tituloLancamento));
}

const insertTituloLancamento = async (titulo_lancamento) => {
    let sql = `insert into titulos_lancamentos (
        titulo,
        valor,
        tabela_contabil,
        observacao
    ) values ($1, $2, $3, $4)`;
    const { titulo, valor, tabela_contabil, observacao } = titulo_lancamento;
    await db.query(sql, [titulo, valor, tabela_contabil, observacao]);
}

const patchTituloLancamento = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e !== 'id' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update titulo_lancamento set ${fields} where id =  ${params.id}`;
    await db.query(sql);
}

const deleteTituloLancamento = async (params) => {
    const sql = `delete from titulo_lancamento where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllTitulosLancamentos = getAllTitulosLancamentos;
module.exports.postTitulosLancamentos = postTitulosLancamentos;
module.exports.patchTituloLancamento = patchTituloLancamento;
module.exports.deleteTituloLancamento = deleteTituloLancamento;
module.exports.getTitulosLancamentoById = getTitulosLancamentoById;
