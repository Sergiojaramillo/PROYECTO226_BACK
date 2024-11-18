const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sergio',
  password: 'Checho28@',
  database: 'Estaciones',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ', err);
    return;
  }

  console.log('Conectado a la base de datos!');
});

