const contasController = require('../controllers/contas');

module.exports = (app) => {
    app.get('/contas', contasController.getAllContas
        //#region FinGL
        /*  #swagger.tags = ['Contas']
            #swagger.summary = 'Retorna uma lista com todas as contas'
        */
        //#endregion
    )
    app.get('/contas/:id', contasController.getContaById
        //#region FinGL
        /*  #swagger.tags = ['Contas']
            #swagger.summary = 'Retorna a conta com base no id passado por parametro'
        */
        //#endregion
    )
    app.post('/contas', contasController.postContas
        //#region FinGL
        /*  #swagger.tags = ['Contas']
            #swagger.summary = 'Cria novas contas com base na estrutura passada no body'
            #swagger.parameters['json'] = {
                in: 'body',
                description: 'Body de exemplo',
                type: 'json',
                schema: [
                    {
                        "descricao": "Caixa",
                        "saldo": 5210.00
                    },
                    {
                        "descricao": "Sicoob",
                        "saldo": 123.52
                    }
                ]
            }
        */
        //#endregion
    )
    app.patch('/contas', contasController.patchConta
        //#region FinGL
        /*  #swagger.tags = ['Contas']
            #swagger.summary = 'Atualiza apenas os dados alterados da conta com base nas informações do body. Id é obrigatorio.'
            #swagger.parameters['json'] = {
                in: 'body',
                description: 'Body de exemplo',
                type: 'json',
                schema: {
                    "id": 1,
                    "saldo": 6000.62
                }
            }
        */
        //#endregion
    )
    app.delete('/contas/:id', contasController.deleteConta
        //#region FinGL
        /*  #swagger.tags = ['Contas']
            #swagger.summary = 'Deleta a conta com base no id passado por parâmetro'
        */
        //#endregion
    )
}