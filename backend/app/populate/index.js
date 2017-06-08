const mongoose = require('mongoose');
const { populateUsers } = require('./users');
const { populateEvents } = require('./events');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/meetin', function(err) {
  if (err) throw err;

  populateUsers().then(() => {
    console.log();
    populateEvents().then(() => {
      console.log();
      console.log('End: Disconnecting mongoose..');
      mongoose.disconnect();
    });
  });
});
