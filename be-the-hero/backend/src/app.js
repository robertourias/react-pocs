const express = require("express");
const routes = require("./routes");
const { errors } = require("celebrate");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 *
 * GET: Busca/Listar informações no back-end
 * POST: Criar informações no back-end
 * PUT: Alterar informações no back-end
 * DELETE: Deletar informações no back-end
 */

/**
 * Tipos de parâmetros
 *
 * Query: request.query: Params: Parâmetros nomeados eviandos na rota após "?" (Filtros, paginação)
 * Route Params: request.params: Parâmetros utilizados para identifcar recursos
 * Request Body: request.body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
