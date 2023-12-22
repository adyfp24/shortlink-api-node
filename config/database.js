const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_shorten',
};

const pool = mysql.createPool(dbConfig);

module.exports = pool.promise();
