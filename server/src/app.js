'use strict';
const mongoose = require("mongoose");
const express = require("express");
var SwaggerExpress = require('swagger-express-mw');

const API_PORT = 3001;
const app = express();
const router = express.Router();

module.exports = app; // for testing

// this is our MongoDB database
const dbRoute = "mongodb://admin:coffeeCoder6233@ds151383.mlab.com:51383/employee";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

var config = {
  appRoot: __dirname, // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
