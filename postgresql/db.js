const { Pool } = require("pg");


const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  database: "bookdb",
  password: "Postgres@123",
})

module.exports = pool