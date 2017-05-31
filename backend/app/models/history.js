/* History model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var historySchema = new Schema({
  user_id: String,
  matched_user: User.schema,
  date: Date
});

module.exports = mongoose.model('history', historySchema);
