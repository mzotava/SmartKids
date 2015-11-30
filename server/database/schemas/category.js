var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var SchemaObjectId = Schema.ObjectId;
// Define the User Schema
var categorySchema = new Schema({
  _id: {type: SchemaObjectId, required: true, auto: true },
  categoryName: { type: String, required: true},
  color: { type: String, default:'blue'},
  image: {type: String},
  header: { type: String, required: true },
  description: { type: String },
  content: {type: String}
});

var CategoryItem = mongoose.model('Category', categorySchema);

var cat = new CategoryItem({
      _id: 2,
      categoryName: 'science',
      color: 'purple',
      image: 'http://localhost:9000/img/art1.jpg',
      header: 'Наука с сервера2',
      description: 'Описание Описание Описание Описание',
      content: 'Content'
});

module.exports = CategoryItem;
