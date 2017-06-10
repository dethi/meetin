/* User model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var matchSchema = new Schema({
  owner: { type: String, ref: 'user' },
  match_user: { type: String, ref: 'user' },
  date: Date
});

module.exports = mongoose.model('match', matchSchema);
