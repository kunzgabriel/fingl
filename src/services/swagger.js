const swaggerAutogen = require('swagger-autogen')('pt-BR');

const doc = {
    info: {
        version: "1.0.0",
        title: "API Fingl",
        description: "Documentação da API Fingl"
    },
    host: 'localhost:3000',
    basePath: '',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
};

const outputFile = './src/docs/swagger.yaml';
const endpointsFiles = [
    './src/routes/clientes.js',
    './src/routes/contas.js',
    './src/routes/fornecedores.js',
    './src/routes/tabelaContabil.js',
    './src/routes/titulos.js',
    './src/routes/titulosLancamentos.js',
];

swaggerAutogen(outputFile, endpointsFiles, doc);