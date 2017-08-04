const mongoose   = require('mongoose')
    , mongooseuv = require('mongoose-unique-validator');

const schema = new mongoose.Schema({
  'firstname': { type: String, required: true },
  'lastname' : { type: String, required: true },
  'username' : { type: String, required: true, unique: true },
  'password' : { type: String, required: true },
  'exams'    : [{ type: mongoose.Schema.ObjectId, ref: 'Exam' }],
  'exam_res' : [{ type: mongoose.Schema.ObjectId, ref: 'ExamResults' }]
});

schema.plugin(mongooseuv);

module.exports = mongoose.model('Student', schema);
