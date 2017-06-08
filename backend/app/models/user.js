/* User model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  uid: { type: String, index: true },
  email: String,
  displayName: String,
  photoURL: String,
  description: String,
  phone: String
});

module.exports = mongoose.model('user', userSchema);
