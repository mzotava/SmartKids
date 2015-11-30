
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var CategoryItem = db.category;
/*
 * GET category.
 */

exports.getCategoryItems = function(req, res){
  var categoryName = req.params.categoryName;

  CategoryItem.find({'categoryName': categoryName}, function(err, items){
    if (err) {

      console.log('Couldn\'t get items  with type ' + color.red(categoryName) + ' because of: ' + err);

      res.status(500).json({
        'message': 'Internal server error. Please contact margaritaa.zotova@gmail.com.'
      });
    }
    if (items) {
      res.status(200).json(items);
    }

  });
};

exports.addItem = function(req, res){

  var categoryItem = new CategoryItem({
    categoryName: req.body.categoryName,
    color: req.body.color,
    image: req.body.image,
    header: req.body.header,
    description: req.body.description,
    content: req.body.content
  });

  categoryItem.save(function (err) {
    if (!err) {
      console.log("item created");
      return res.send({ status: 'OK', item:categoryItem });
    } else {
      console.log(err);
      if(err.name == 'ValidationError') {
        res.statusCode = 400;
        res.send({ error: 'Validation error' });
      } else {
        res.statusCode = 500;
        res.send({ error: 'Server error' });
      }
      console.log('Internal error(%d): %s',res.statusCode,err.message);
    }
  });
};

exports.getItem = function(req, res){

  CategoryItem.findById(req.params.itemId, function (err, item) {
    if (!item) {
      res.statusCode = 404;
      return res.send({error: 'Not found'});
    }
    if (!err) {
      return res.send({status: 'OK', item: item});
    } else {
      res.statusCode = 500;
      console.log.error('Internal error(%d): %s', res.statusCode, err.message);
      return res.send({error: 'Server error'});
    }
  })
};

exports.editItem = function(req, res){

};
