const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  
  content: String
});

const Post = mongoose.model('Item', itemSchema);

module.exports = Post;
