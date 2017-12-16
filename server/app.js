// Requires
var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index.router');
require('dotenv').config();
var port = process.env.PORT || 4500;

// Using requst module to make HTTP requests from the server
// https://www.npmjs.com/package/request
var request = require('request');

// Middleware
app.use(express.static('server/public'));

// Routes
app.use('/*', index);

app.listen(port, function () {
  console.log('localhost running on port', port);
});
