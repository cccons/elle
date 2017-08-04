const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'question' : { type: mongoose.Schema.ObjectId, ref: 'Question', required: true },
  'value'    : { type: String, required: true },
  'comment'  : { type: String }
});

module.exports = mongoose.model('Answer', schema);
