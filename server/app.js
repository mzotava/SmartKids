
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var path = require('path');
var category = require('./routes/category');

var app = module.exports = express.createServer();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:9000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');


  next();
}
// Configuration

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(allowCrossDomain);
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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes
app.get('/category/:categoryName', category.getCategoryItems);
app.put('/items/:itemId', category.editItem);
app.get('/items/:itemId', category.getItem);
app.post('/items', category.addItem);



app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
