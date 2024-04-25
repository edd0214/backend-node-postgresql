const { Client} = require('pg'); // llamamos al driver


async function getConnection () { //creamos una función async para ejecutar el await
  const client = new Client ({ //creamos una nueva instancia de client
    host: 'localhost', //indicamos la configuración de la conexión
    port: 5432, //indocamos el puerto desde el cual se ejecuta la base de datos
    user: 'miguel',  // señalamos el nombre de usuario
    password: 'admin123',  //indicamos la contraseña configurada
    database: 'my_store'  //nombre de la base de datos
  });
  await client.connect(); // creamos la conexión del cliente
  return client;  //retornamos el client para poder utilizar y ejecutar consultas
}

module.exports = getConnection; //

