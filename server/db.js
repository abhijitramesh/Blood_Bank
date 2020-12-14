const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Enter Your Postgres Password",
  host: "localhost",
  port: 5432,
  database: "blood_bank"
});

module.exports = pool;