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
});

// http://localhost:4000/list
app.get("/list", (request, response) => {
  var sql_query = `SELECT * FROM karthick_kumar`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
});

// http://localhost:4000/create
app.post("/create", (request, response) => {
  var name = request.body.name;
  var age = request.body.age;
  var city = request.body.location;
  var email = request.body.email;

  var sql_query = `INSERT INTO karthick_kumar (name, age, location, email) VALUES ('${name}', ${age}, '${city}', '${email}')`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send({
        message : "User profile has been created successfully"
      });
    }
  })
})

// http://localhost:4000/edit/1

app.put("/edit/:id", (request, response) => {
  var id = request.params.id;

  var name = request.body.name;
  var age = request.body.age;
  var city = request.body.location;
  var email = request.body.email;

  var sql_query = `UPDATE karthick_kumar SET name='${name}', age=${age}, location='${city}', email='${email}' WHERE id=${id}`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send({
        message : "User profile has been updated successfully"
      });
    }
  })

})

// http://localhost:4000/delete/1

app.delete("/delete/:id", (request, response) => {
  var id = request.params.id;

  var sql_query = `DELETE FROM karthick_kumar WHERE id=${id}`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send({
        message : "User profile has been deleted successfully"
      });
    }
  })
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