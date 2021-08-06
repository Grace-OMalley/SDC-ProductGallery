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

const seedScript = (id = 1, count = 1, tagCycle = 1) => {
  let productId = id;
  let cycle = count;
  let rndPic = Math.floor(Math.random() * 1001);
  let imgUrl = `https://picsum.photos/id/${rndPic}/200/300`;
  let rndNum = Math.floor(Math.random() * (6 - 1) + 1);
  let rndTag = ['tech', 'animals', 'arch', 'people', 'nature'];
  let options = [productId, imgUrl, rndNum];

  if (tagCycle === 1) {
    for (let i = 0; i < 5; i++) {
      connection.query('INSERT INTO tags (tag_name) VALUES (?)', [rndTag[i]], (err, data) => {
        if (err) {
          console.log('MYSQL Error:', err);
        } else {
          console.log('MYSQL SUCCESS:', data);
        }
      });
    }
  }

  if (productId <= 10000000) {
    connection.query('INSERT INTO images (product_id, img_url, tag_id) VALUES (?, ?, ?) ', options, (err, data) => {
      if (err) {
        console.log('MYSQL Error:', err);
      } else {
        console.log('MYSQL SUCCESS:', productId, data);
        if (cycle === 5) {
          seedScript(productId += 1, 1, null);
        } else {
          seedScript(productId, cycle += 1, null);
        }
      }
    });
  }

};
seedScript();

// const { Sequelize } = require('sequelize');
// const databaseName = 'images';
// const sequelize = new Sequelize('productImages', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });