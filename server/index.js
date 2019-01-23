require('newrelic');
const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
// const dbMongo = require('../database/mongoIndex.js');
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

// -------- postgres crud -------- //
app.get('/api/restaurants/:id/reviews', (req, res) => {
  const parsedId = parseInt(req.params.id, 10);
  // go to redis
  dbPostgres.retrieveReviews(parsedId, (err, reviews) => {
    if (err) res.status(500).send(err);
    if (reviews) res.status(200).send(reviews);
  });
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

// -------- server -------- //
const port = 3004;
app.listen(port, () => console.log(`listening on port ${port}!`));
