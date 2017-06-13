const mongoose = require('mongoose');
const { populateUsers } = require('./users');
const { populateEvents } = require('./events');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, function(err) {
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
