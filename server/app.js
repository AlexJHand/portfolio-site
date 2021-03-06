// Requires
const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index.router');
const mail = require('./routes/mail.router');
require('dotenv').config();
const port = process.env.PORT || 4500;

// Using requst module to make HTTP requests from the server
// https://www.npmjs.com/package/request
const request = require('request');

// Middleware
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/mail', mail);
app.use('/', index);

app.listen(port, function () {
  console.log('localhost running on port', port);
});
