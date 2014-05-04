var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var componentLoader = require('./lib/component-loader')();

// Database
var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/dive-log", {native_parser:true});

var routes = require('./routes');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/bower_components", express.static(path.join(__dirname, 'bower_components')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});


// Keep track of components js and css to load them in the view
app.scripts = [];
app.styles = [];

var dir = path.join(__dirname, 'components');
componentLoader.loadComponents(dir, function(components) {
    "use strict";

    //https://github.com/jimakker/angular-express-bootstrap-seed/blob/master/views/partials/partial2.jade
    //https://github.com/angular-app/angular-app
    //https://github.com/sgebhardt/ng-module-boilerplate

    app.get('/', routes.index);
    app.get('/partial/:component/:name', routes.partial);
    app.get('/partial/:name', routes.partial);

    // JSON API
    app.get('/api/name', api.name);

    // redirect all others to the index (HTML5 history)
    app.get('*', routes.index);

    /// catch 404 and forwarding to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    /// error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }


    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });

});

module.exports = app;
