var express = require("express");
var cors = require("cors");
var mysql = require("mysql");

var app = express();
var http = require("http").createServer(app);

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: '*'
}));

var connection = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12601321",
  password: "DRvyHLYxWX",
  database: "sql12601321",
  port: 3306
});

connection.connect((error) => {
  if(error){
    throw error;
  }
  else{
    console.log("MYSQL Database is connected successfully");
  }
})


var port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("Node JS Server is running on Port 4000");
}); 


// Server: sql12.freemysqlhosting.net
// Database Name: sql12601321
// Username: sql12601321
// Password: DRvyHLYxWX
// Port number: 3306