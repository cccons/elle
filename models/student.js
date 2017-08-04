const mongoose   = require('mongoose')
    , mongooseuv = require('mongoose-unique-validator');

const schema = new mongoose.Schema({
  'firstname': { type: String, required: true },
  'lastname' : { type: String, required: true },
  'email'    : { type: String, required: true, unique: true },
  'username' : { type: String, required: true, unique: true },
  'password' : { type: String, required: true },
  'results'  : [{ type: mongoose.Schema.ObjectId, ref: 'ExamResult' }]
});

schema.plugin(mongooseuv);

module.exports = mongoose.model('Student', schema);
