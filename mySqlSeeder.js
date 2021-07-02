const config = require('./config.js');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: config.host,
  user: 'root',
  password: config.sqlPassword,
  database: config.database
});

connection.connect((err) => {
  if (err) {
    console.log('FAILED TO CONNECT TO MYSQL: ', err);
    return;
  }
  console.log('CONNECTED TO MYSQL!');
});
