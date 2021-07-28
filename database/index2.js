require('newrelic');
const config = require('../config.js');
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

let create = (item, callback) => {

};

let read = (item, callback) => {
  let options = [item];
  connection.query('SELECT * FROM images WHERE product_id = ?', options, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

let update = (item, callback) => {

};

let _delete = (item, callback) => {

};

module.exports = {create, read, update, _delete};