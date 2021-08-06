require('newrelic');
const config = require('../config.js');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: config.host,
  user: 'devposton',
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
  connection.query('SELECT MAX(product_id) FROM images', (err, data) => {
    if (err) {
      callback(err);
    } else {
      let id = data[0]['MAX(product_id)'];
      let rndNum = Math.floor(Math.random() * (6 - 1) + 1);
      connection.query('INSERT INTO images (product_id, img_url, tag_id) VALUES (?, ?, ?) ', [id + 1, item.images[0], rndNum], (err, data) => {
        if (err) {
          callback(err);
        } else {
          callback(null, data);
        }
      });
    }
  });
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