const { Pool } = require('pg')

const pool = new Pool()

pool.query('SELECT * FROM users WHERE id = $1', [1], (err, res) => {
  if (err) {
    throw err
  }

  console.log('user:', res.rows[0])
})




const { Pool } = require('pg');

// client.on('connect', (err, res) => {
//   console.log('ERR ', err);
//   console.log('RES ', res);
// })

const pool = new Pool({
  database: 'samplesdc',
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  ssl: true,
  max: 20,
  min: 0,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 1000,
});

// pool.on('connect', (client) => {
//   console.log('+++ CONNECTED TO POSTGRES +++', client);
// })

// pool.connect();
