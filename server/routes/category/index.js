
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Category = db.category;
/*
 * GET category.
 */

exports.getCategoryItems = function(req, res){
  var body = req.body;
  var categoryName = req.params.categoryName;
  var time = moment().format('MMMM Do YYYY, h:mm:ss a');
  Category.find({'categoryName': categoryName}, function(err, items){
    if (err) {

      // Nice log message on your end, so that you can see what happened
      console.log('Couldn\'t get items  with type ' + color.red(categoryName) + ' because of: ' + err);

      // send the error
      res.status(500).json({
        'message': 'Internal server error. Please contact margaritaa.zotova@gmail.com.'
      });
    }
    if (items) {
      res.status(200).json(items);
    }

  });
};
