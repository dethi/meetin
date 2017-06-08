/* History model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var eventSchema = new Schema({
  user_id: { type: String, ref: 'user' },
  participants: [{ type: String, ref: 'user' }],
  max_participants: Number,
  title: String,
  description: String,
  category: String,
  address: String,
  date: Date,
  time: String
});

module.exports = mongoose.model('event', eventSchema);
