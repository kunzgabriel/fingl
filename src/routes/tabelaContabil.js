const tabelaContabilController = require('../controllers/tabelaContabil');

module.exports = (app) => {
    app.get('/tabelaContabil', tabelaContabilController.getAllTabelaContabil
        //#region FinGL
        /*  #swagger.tags = ['Tabelas Contábeis']
            #swagger.summary = 'Retorna uma lista com todas as tabelas contábeis'
        */
        //#endregion
    )
    app.get('/tabelaContabil/:id', tabelaContabilController.getTabelaContabilById
        //#region FinGL
        /*  #swagger.tags = ['Tabelas Contábeis']
            #swagger.summary = 'Retorna a tabela contábil com base no id passado por parametro'
        */
        //#endregion
    )
    app.post('/tabelaContabil', tabelaContabilController.postTabelaContabil
        //#region FinGL
        /*  #swagger.tags = ['Tabelas Contábeis']
            #swagger.summary = 'Cria novas tabelas contábeis com base na estrutura passada no body.'
            #swagger.parameters['json'] = {
                in: 'body',
                description: 'Body de exemplo',
                type: 'json',
                schema: [
                    {
                        "descricao": "Transferencia Caixa para Sicoob",
                        "conta_credito": 1,
                        "conta_debito": 2
                    },
                    {
                        "descricao": "Transferencia Sicoob para Caixa",
                        "conta_credito": 2,
                        "conta_debito": 1
                    }
                ]
            }
        */
        //#endregion
    )
    app.patch('/tabelaContabil', tabelaContabilController.patchTabelaContabil
        //#region FinGL
        /*  #swagger.tags = ['Tabelas Contábeis']
            #swagger.summary = 'Atualiza apenas os dados alterados da tabela contábil com base nas informações do body. Id é obrigatorio.'
            #swagger.parameters['json'] = {
                in: 'body',
                description: 'Body de exemplo',
                type: 'json',
                schema: {
                    "id": 2,
                    "conta_credito": 1
                }
            }
        */
        //#endregion
    )
    app.delete('/tabelaContabil/:id', tabelaContabilController.deleteTabelaContabil
        //#region FinGL
        /*  #swagger.tags = ['Tabelas Contábeis']
            #swagger.summary = 'Deleta a tabela contábil com base no id passado por parâmetro'
        */
        //#endregion
    )
}