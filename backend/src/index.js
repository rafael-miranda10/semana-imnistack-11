const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);

/*
* Rotas / Recursos
*/

/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizando para criar ou alterar recuros
 */

/**
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, SQL Server
 * NoSQL: MongoDB, CouchDB
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */




