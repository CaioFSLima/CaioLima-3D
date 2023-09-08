const mysql = require('mysql2')

//Configuração e conexão com banco
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'livros'
})

// É necessário exportar esse modulo

module.exports = pool