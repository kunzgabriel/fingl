const { Pool } = require('pg');

const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'fingl',
    password: '123456',
    port: 5932
});

module.exports = { query: (text, params) => pool.query(text, params) };