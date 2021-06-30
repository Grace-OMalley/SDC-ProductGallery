const axios = require('axios');
const config = require('./config.js');

let url = `http://admin:${config.password}@localhost:5984/product-gallery/_bulk_docs`;

let seedScript = (dbCount = 1) => {
  let dbCounter = dbCount;
  let bulk = {
    docs: []
  };
  for (var i = 0; i < 5000; i++) {
    bulk.docs.push({productId: dbCounter, images: ['https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200']});
    dbCounter++;
  }
  axios.post(url, bulk)
    .then((res) => {
      console.log('couchDB Seeded 1000:', res);
      if (dbCounter < 10000000) {
        bulk.docs = [];
        seedScript(dbCounter);
      }
    })
    .catch((err) => {
      console.log('couchDB res - ERROR:', err);
    });
};
seedScript();