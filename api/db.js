import mysql from 'mysql2/promise';

// cria a conexão com o banco de dados
export const db = mysql.createPool({
  host: 'localhost',
  user: 'myuser',
  database: 'mydatabase',
  password: 'mypassword',
});

// testa a conexão com o banco de dados
db.getConnection()
  .then(connection => {
    console.log('Connected to the database');
    connection.release();
  })
  .catch(err => console.error('Error connecting to the database', err.stack));
