const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'teacher'    : { type: mongoose.Schema.ObjectId, ref: 'Teacher', required: true },
  'students'   : [{ type: mongoose.Schema.ObjectId, ref: 'Student' }],
  'exams'      : [{ type: mongoose.Schema.ObjectId, ref: 'Exam' }],
  'statistics' : { type: mongoose.Schema.Mixed }
});

module.exports = mongoose.model('Class', schema);
