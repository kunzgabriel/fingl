const titulosController = require('../controllers/titulos');

module.exports = (app) => {
    app.get('/titulos', titulosController.getAllTitulos
        //#region FinGL
        /*  #swagger.tags = ['Títulos']
            #swagger.summary = 'Retorna uma lista com todos os títulos'
        */
        //#endregion
    )
    app.get('/titulos/:id', titulosController.getTituloById
        //#region FinGL
        /*  #swagger.tags = ['Títulos']
            #swagger.summary = 'Retorna o título com base no id passado por parametro'
        */
        //#endregion
    )
    app.post('/titulos', titulosController.postTitulos
        //#region FinGL
        /*  #swagger.tags = ['Títulos']
            #swagger.summary = 'Cria novos títulos com base na estrutura passada no body.'
            #swagger.parameters['json'] = {
                in: 'body',
                description: 'Body de exemplo',
                type: 'json',
                schema: [
                    {
                        "tipo": "R",
                        "tabela_contabil": 1,
                        "titulo": "titulo-teste-2",
                        "cliente": 1,
                        "fornecedor": 1,
                        "emissao": "2020-02-01",
                        "valor": 150.00,
                        "vencimento": "2020-02-10",
                        "pagamento": "2020-02-10",
                        "valor_pago": 150.00,
                        "observacao": "qualquer coisa pra receber",
                        "desconto": 0.00,
                        "multa": 0.00
                    }
                ]
            }
        */
        //#endregion
    )
    app.patch('/titulos', titulosController.patchTitulo
        //#region FinGL
        /*  #swagger.tags = ['Títulos']
            #swagger.summary = 'Atualiza apenas os dados alterados do título com base nas informações do body. Id é obrigatorio.'
            #swagger.parameters['json'] = {
                in: 'body',
                description: 'Body de exemplo',
                type: 'json',
                schema: {
                    "id": 1,
                    "multa": 12.00
                }
            }
        */
        //#endregion
    )
    app.delete('/titulos/:id', titulosController.deleteTitulo
        //#region FinGL
        /*  #swagger.tags = ['Títulos']
            #swagger.summary = 'Deleta o título com base no id passado por parâmetro'
        */
        //#endregion
    )
}