
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var path = require('path');
var category = require('./routes/category');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  // This will change in production since we'll be using the dist folder
  app.use(express.static(path.join(__dirname, '../')));
  // This covers serving up the index page
  app.use(express.static(path.join(__dirname, '../.tmp')));
  app.use(express.static(path.join(__dirname, '../app')));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.static(path.join(__dirname, '/dist')));
  app.use(express.errorHandler());
});

// Routes
app.get('/category/:categoryName', category.getCategoryItems);
app.put('/items/:itemId', category.editItem);
app.get('/items/:itemId', category.getItem);
app.post('/items', category.addItem);



app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
