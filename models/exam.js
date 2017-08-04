const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'name'         : { type: String, required: true },
  'is_published' : { type: Boolean, default: false },
  'questions'    : [{ type: mongoose.Schema.ObjectId, ref: 'Question' }]
});

module.exports = mongoose.model('Exam', schema);
