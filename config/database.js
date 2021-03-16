const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '192.168.150.172',
    post: '3306',
    user: 'minseo',
    password: 'kobic123',
    database: 'nodejs_test'
});

module.exports = connection;