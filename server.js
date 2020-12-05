const express = require("express");
const dotenv = require("dotenv").config();
const mysql = require("mysql");
const { someid, greatAdmin,pagination } = require("./controllers/subtask");

const port = process.env.PORT || 2000;
const app = express();

//Connnect to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test123",
});
global.db = db;

//Connection error if any
db.connect((err) => {
  if (err) throw err;
  else {
    console.log("Database connected...");
  }
});

//middleware
app.set("port", port);

//routes for api

app.get('/users',pagination)//user's list with pagination
app.get("/selcetedusers", someid); //user_id in 1, 5, 7
app.get("/niceadmin", greatAdmin); //user whose admin has >=3 users

//set app to listen on this port
app.listen(port, () => {
  console.log(`Server running at ${port}...`);
});
