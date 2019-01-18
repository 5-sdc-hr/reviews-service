const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const dbMongo = require('../database/mongoIndex.js');
const dbPostgres = require('../database/postgresIndex.js');

app.use(morgan('tiny'));
app.use(bodyParser());
app.use(compression({ threshold: 0 }));

app.use('/restaurants/:id', express.static(`${__dirname}/../client/dist`));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// // -------- mongo crud -------- //
// app.get('/api/restaurants/:id/reviews', (req, res) => {
//   let sortQuery = 'newest';
//   if (req.query.sort) {
//     sortQuery = req.query.sort;
//   }
//   const parsedId = parseInt(req.params.id, 10);
//   dbMongo.retrieveReviews(parsedId, sortQuery, (err, results) => {
//     if (err) {
//       res.status(404).end();
//     }
//     res.send(results);
//   });
// });

// -------- postgres crud -------- //
app.get('/api/restaurants/:id/reviews', (req, res) => {
  console.log('HERE')
  const parsedId = parseInt(req.params.id, 10);
  dbPostgres.retrieveReviews(parsedId, (reviews) => {
    res.send(reviews);
  });
});

// -------- server -------- //
const port = 3004;
app.listen(port, () => console.log(`listening on port ${port}!`));
