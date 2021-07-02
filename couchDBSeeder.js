const axios = require('axios');
const config = require('./config.js');

let url = `http://admin:${config.password}@localhost:5984/product-gallery/_bulk_docs`;

let seedScript = (dbCount = 1) => {
  let dbCounter = dbCount;
  let bulk = {
    docs: []
  };
  for (var i = 0; i < 5000; i++) {
    bulk.docs.push({productId: dbCounter, images: ['https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200']});
    dbCounter++;
  }
  axios.post(url, bulk)
    .then((res) => {
      if (dbCounter < 10000000) {
        seedScript(dbCounter);
      }
    })
    .catch((err) => {
      console.log('couchDB RES - ERROR:', err);
    });
};
seedScript();