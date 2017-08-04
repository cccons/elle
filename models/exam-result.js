const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'teacher' : { type: mongoose.Schema.ObjectId, ref: 'Teacher', required: true },
  'student' : { type: mongoose.Schema.ObjectId, ref: 'Student', required: true },
  'score'   : { type: Number, required: true },
  'exam'    : { type: mongoose.Schema.ObjectId, ref: 'Exam', required: true },
  'answers' : [{ type: mongoose.Schema.ObjectId, ref: 'Answer', required: true }]
});

module.exports = mongoose.model('ExamResult', schema);
