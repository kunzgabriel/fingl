const clientesController = require('../controllers/clientes');

module.exports = (app) => {
    app.get('/clientes', clientesController.getAllClientes
        //#region FinGL
        /*  #swagger.tags = ['Clientes']
            #swagger.summary = 'Retorna uma lista com todos os clientes'
        */
        //#endregion
    )
    app.get('/clientes/:id', clientesController.getClienteById
        //#region FinGL
        /*  #swagger.tags = ['Clientes']
            #swagger.summary = 'Retorna o cliente com base no id passado por parametro'
        */
        //#endregion
    )
    app.post('/clientes', clientesController.postClientes
        //#region FinGL
        /*  #swagger.tags = ['Clientes']
            #swagger.summary = 'Cria novos clientes com base na estrutura passada no body'
            #swagger.parameters['json'] = {
                in: 'body',
                description: 'Body de exemplo',
                type: 'json',
                schema: [{
                    "nome": "Fulano da Silva",
                    "cpfcnpj": "123.456.789-10",
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
    app.patch('/clientes', clientesController.patchCliente
        //#region FinGL
        /*  #swagger.tags = ['Clientes']
            #swagger.summary = 'Atualiza apenas os dados alterados do cliente com base nas informações do body. Id é obrigatorio.'
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
    app.delete('/clientes/:id', clientesController.deleteCliente
        //#region FinGL
        /*  #swagger.tags = ['Clientes']
            #swagger.summary = 'Deleta o cliente com base no id passado por parâmetro'
        */
        //#endregion
    )
}