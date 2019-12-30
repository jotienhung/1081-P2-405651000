const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "jotien19",
  database: "dbdemo"
});

// Testing database connection
// pool.query("SELECT * FROM dbdemo.demo", function(err, results) {
//   console.log(JSON.stringify(results)); 
//   // results contains rows returned by server
//   console.log("Database dbdemo connected.");
// });

module.exports = pool.promise();
