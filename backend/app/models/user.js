/* User model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  uid: { type: String, index: true },
  email: String,
  displayName: String,
  photoUrl: String,
  description: String
});

module.exports = mongoose.model('users', userSchema);
