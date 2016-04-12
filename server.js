
/**
 * Module dependencies
 */
var fs = require('fs');
var express = require('express');
var mongoose = require('mongoose');
var config = require(__dirname + '/config/env/development.js');

var app = express();
var port = process.env.PORT || 3000;


// Connect to mongodb
var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.connect(config.db, options);
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Bootstrap application settings
require(__dirname + '/config/express.js')(app);

// Bootstrap routess
require(__dirname + '/config/routes.js')(app);

app.listen(port);
console.log('Listening on port ' + port);

