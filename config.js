//Importación de librería PostgreSQL.
const { Pool } = require("pg");

//Configuración de la base de datos.
const config = {
  host: "localhost",
  port: 5432,
  database: "alwaysmusic",
  user: "****",
  password: "*****",
};

// Instanciamos la clase Pool
const pool = new Pool(config);

//Exportación de módulo.
module.exports = pool;
