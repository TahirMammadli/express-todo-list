const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('dotenv').config({path: __dirname + '/.env'})
const MONGODB_URI = process.env['MONGODB_URI'];
const todoRoutes = require('./routes/todo');

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(todoRoutes);

mongoose.connect(MONGODB_URI)
.then(res => console.log("Connected!"))
.catch(err => console.log(err));

app.listen(8080);