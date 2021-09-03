const express = require('express');
const app = express();
app.use(express.json());

require('./routes')(app);
app.get('/', (req, res) => res.status(200).send('FinGL - Sistema para gerenciamento financeiro.'));

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));