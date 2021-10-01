const titulosLancamentosController = require('../controllers/titulosLancamentos');

module.exports = (app) => {
    app.get('/titulosLancamentos', titulosLancamentosController.getAllTitulosLancamentos
        //#region FinGL
        /*  #swagger.tags = ['Lançamentos dos Títulos']
            #swagger.summary = 'Retorna uma lista com todos os lançamentos dos títulos'
        */
        //#endregion
    )
    app.get('/titulosLancamentos/:id', titulosLancamentosController.getTitulosLancamentoById
        //#region FinGL
        /*  #swagger.tags = ['Lançamentos dos Títulos']
            #swagger.summary = 'Retorna o lançamento de título com base no id passado por parametro'
        */
        //#endregion
    )
    app.post('/titulosLancamentos', titulosLancamentosController.postTitulosLancamentos
        //#region FinGL
        /*  #swagger.tags = ['Lançamentos dos Títulos']
            #swagger.summary = 'Cria novos lançamentos de título com base na estrutura passada no body. Titulo e tabela contábil são chaves estrangeiras, devem ser criadas antes.'
            #swagger.parameters['json'] = {
                in: 'body',
                description: 'Body de exemplo',
                type: 'json',
                schema: [
                    {
                        "titulo": 1,
                        "valor": 150.00,
                        "tabela_contabil": 1,
                        "observacao": 'recebimento da conta 1'
                    },
                    {
                        "titulo": 1,
                        "valor": 150.00,
                        "tabela_contabil": 2,
                        "observacao": 'estorno da conta 1'
                    }
                ]
            }
        */
        //#endregion
    )
    app.patch('/titulosLancamentos', titulosLancamentosController.patchTituloLancamento
        //#region FinGL
        /*  #swagger.tags = ['Lançamentos dos Títulos']
            #swagger.summary = 'Atualiza apenas os dados alterados do lançamento de título com base nas informações do body. Id é obrigatorio.'
            #swagger.parameters['json'] = {
                in: 'body',
                description: 'Body de exemplo',
                type: 'json',
                schema: {
                    "id": 1,
                    "valor": 120.00
                }
            }
        */
        //#endregion
    )
    app.delete('/titulosLancamentos/:id', titulosLancamentosController.deleteTituloLancamento
        //#region FinGL
        /*  #swagger.tags = ['Lançamentos dos Títulos']
            #swagger.summary = 'Deleta o lançamento de título com base no id passado por parâmetro'
        */
        //#endregion
    )
}