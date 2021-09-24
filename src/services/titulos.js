const db = require('../config/db');

const getAllTitulos = async () => {
    let sql = `select * from titulos`;
    let titulos = {};

    await db.query(sql)
        .then(ret =>  titulos = { total: ret.rows.length, titulos: ret.rows })
        .catch(err => titulos = err.stack );

    return titulos;
}

const getTituloById = async (params) => {
    let sql = `select * from titulos where id = ${params.id}`;
    let titulo = {};

    await db.query(sql)
        .then(ret =>  titulo = { total: ret.rows.length, titulo   : ret.rows })
        .catch(err => titulo = err.stack );

    return titulo;
}

const postTitulos = async (params) => {
    params.map(titulo => insertTitulo(titulo));
}

const insertTitulo = async (tituloPost) => {
    let sql = `insert into titulos (
        tipo,
        tabela_contabil,
        titulo,
        cliente,
        fornecedor,
        emissao,
        valor,
        vencimento,
        pagamento,
        valor_pago,
        observacao,
        desconto,
        multa
        ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
    const { tipo, tabela_contabil, titulo, cliente, fornecedor, emissao, valor, vencimento, pagamento, valor_pago, observacao, desconto, multa } = tituloPost;
    await db.query(sql, [tipo, tabela_contabil, titulo, cliente, fornecedor, emissao, valor, vencimento, pagamento, valor_pago, observacao, desconto, multa]);
}

const patchTitulo = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e !== 'id' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update titulos set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

const deleteTitulo = async (params) => {
    const sql = `delete from clientes where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllTitulos = getAllTitulos;
module.exports.postTitulos = postTitulos;
module.exports.patchTitulo = patchTitulo;
module.exports.deleteTitulo = deleteTitulo;
module.exports.getTituloById = getTituloById;
