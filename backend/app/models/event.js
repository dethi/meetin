/* History model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var eventSchema = new Schema({
  user_id: String,
  participants: [User.schema],
  nb_participant: Number,
  title: String,
  description: String,
  category: String,
  date: Date,
  time_period: String
});

module.exports = mongoose.model('event', eventSchema);
