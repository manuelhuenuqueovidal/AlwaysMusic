//Conexión con configuración.
const pool = require("./config");

//Ejecutar una consulta SQL.
async function consultaSQL() {
  //Obtenemos una conexión de la pool
  const client = await pool.connect();

  try {
    //Hacer consulta.
    const result = await client.query("SELECT * FROM estudiantes");

    //Ver resultados.
    console.log(result.rows);
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
  } finally {
    //Liberamos la conexión
    client.release();
  }
}

//Insertar un estudiante.
const insertUser = async () => {
  const text = "INSERT INTO estudiantes(nombre, rut, curso, nivel) VALUES($1, $2, $3, $4)";
  const values = ["Carolina", "14335446k", "Guitarra", "2"];

  const response = await pool.query(text, values);
  console.log(response);
};

//Consulta del RUT.
const consultaRut = async (rut) => {
    const text = "SELECT * FROM estudiantes WHERE rut = $1";
    const values = [rut];
  
    const response = await pool.query(text, values);
    console.log(response.rows);
};

  //Actualizar un usuario
const updateUser = async () => {
    const text = "UPDATE estudiantes SET nivel = $1 ";
    const values = ["3"];
  
    const response = await pool.query(text, values);
    console.log(response);
};

// Eliminar un usuario
const deleteUser = async () => {
  const text = "DELETE FROM estudiantes WHERE id = $1";
  const values = [2];

  const response = await pool.query(text, values);
  console.log(response);
};



module.exports = { consultaSQL, insertUser, updateUser, consultaRut, deleteUser };
