const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 3333
const mysql = require('mysql2')

//Importar o módulo conn para as operações com o banco

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('home')
})

app.get('/cadastrar.handlebars', (request, response) => {
  return response.render('cadastrar')
})

app.get('/edit.handlebars', (request, response) => {
  return response.render('edit')
})

app.get('/view.handlebars', (request, response) => {
  return response.render('view')
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'Sen@iDev77!.',
  database: 'livros'
})

connection.connect((error) => {
  if (error) {
    console.error(`Erro: ${error}`)
    return
  }

  console.log('Mysql Conectado')
})