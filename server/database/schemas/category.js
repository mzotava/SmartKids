var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var SchemaObjectId = Schema.ObjectId;
// Define the User Schema
var categorySchema = new Schema({
  _id: {type: Number, required: true },
  categoryName: { type: String, required: true},
  color: { type: String, default:'blue'},
  image: {type: String},
  header: { type: String, required: true, unique: true },
  description: { type: String },
  content: {type: String}
});

var Category = mongoose.model('Category', categorySchema);

var cat = new Category({
      _id: 2,
      categoryName: 'science',
      color: 'purple',
      image: 'http://localhost:9000/img/art1.jpg',
      header: 'Наука с сервера2',
      description: 'Описание Описание Описание Описание',
      content: 'Content'
});

cat.save(function (err, data) {
  if (err) console.log(err);
  else console.log('Saved : ', data );
});

module.exports = Category;
