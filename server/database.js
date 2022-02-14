const { Pool } = require('pg');
import dotenv from 'dotenv';
dotenv.config();

const PG_URI = process.env.DBURI;

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};