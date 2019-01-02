const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username:  String,
  password:  String,
  firstname: String,
  lastname: String,
  scope: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
      type: Date,
      default: null
  }
});

module.exports = mongoose.model('User', UserSchema);