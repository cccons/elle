const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'value'  : { type: String, required: true },
  'points' : { type: Number, required: true }
});

module.exports = mongoose.model('Question', schema);
