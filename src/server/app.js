var express = require('express');
var favicon = require('static-favicon');
var logger = require('morgan');
var path = require('path');

var app = express();
app.use(favicon());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../../')));
app.get('/', function (req, res) {
    var index = __dirname + '/../../index.html';
    console.log(index);
    res.sendfile(index);
});

module.exports = app;

