const fornecedoresController = require('../controllers/fornecedores');

module.exports = (app) => {
    app.get('/fornecedores', fornecedoresController.getAllFornecedores
        //#region FinGL
        /*  #swagger.tags = ['Fornecedores']
            #swagger.summary = 'Retorna uma lista com todos os fornecedores'
        */
        //#endregion
    )
    app.get('/fornecedores/:id', fornecedoresController.getFornecedorById
        //#region FinGL
        /*  #swagger.tags = ['Fornecedores']
            #swagger.summary = 'Retorna o fornecedor com base no id passado por parametro'
        */
        //#endregion
    )
    app.post('/fornecedores', fornecedoresController.postFornecedores
        //#region FinGL
        /*  #swagger.tags = ['Fornecedores']
            #swagger.summary = 'Cria novos fornecedores com base na estrutura passada no body'
            #swagger.parameters['json'] = {
                in: 'body',
                description: 'Body de exemplo',
                type: 'json',
                schema: [{
                    "nome": "Fulano da Silva",
                    "cpfcnpj": "12.345.678/0009-10",
                    "data_nascimento": "1900-01-01",
                    "telefone": "(49) 3333-3333",
                    "celular": "(49) 98888-9999",
                    "email": "seuemail@teste.com",
                    "endereco": "Rua das Ruas",
                    "bairro": "Bairro dos Bairros",
                    "numero": 123,
                    "complemento": "Complemento dos Complementos",
                    "cep": "00000-000",
                    "municipio": "Pinhalzinho",
                    "uf": "SC"
                }]
            }
        */
        //#endregion
    )
    app.patch('/fornecedores', fornecedoresController.patchFornecedor
        //#region FinGL
        /*  #swagger.tags = ['Fornecedores']
            #swagger.summary = 'Atualiza apenas os dados alterados do fornecedor com base nas informações do body. Id é obrigatorio.'
            #swagger.parameters['json'] = {
                in: 'body',
                description: 'Body de exemplo',
                type: 'json',
                schema: {
                    "id": 1,
                    "nome": "Ciclano da Silveira"
                }
            }
        */
        //#endregion
    )
    app.delete('/fornecedores/:id', fornecedoresController.deleteFornecedor
        //#region FinGL
        /*  #swagger.tags = ['Fornecedores']
            #swagger.summary = 'Deleta o fornecedor com base no id passado por parâmetro'
        */
        //#endregion
    )
}