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



var port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("Node JS Server is running on Port 4000");
}); 