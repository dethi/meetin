/* History model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var eventSchema = new Schema({
  user_id: String,
  participants: [User.schema],
  title: String,
  description: String,
  icon_type: String,
  date: Date,
  time_period: String
});

module.exports = mongoose.model('event', eventSchema);
