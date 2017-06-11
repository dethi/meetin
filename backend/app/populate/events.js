const mongoose = require('mongoose');
var User = require('./../models/user');
var Event = require('./../models/event');

getUsers = () => {
  return User.find({})
    .then(users => {
      let savedUser = {};
      users.map(user => {
        savedUser[user.displayName] = user;
      });
      return savedUser;
    })
    .catch(error => {
      console.error(error);
      console.log('Find: Disconnecting mongoose..');
      mongoose.disconnect();
    });
};

module.exports = {
  populateEvents: () => {
    return getUsers().then(users => {
      var list = [
        new Event({
          owner: users['Albert Einstein']._id,
          participants: ['Albert Einstein'],
          max_participants: 10,
          title: 'Petit basket',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam risus porta, tincidunt odio consectetur, dapibus ex. Suspendisse auctor fringilla elit vitae bibendum. Etiam vel risus eget nibh imperdiet dapibus. In hac habitasse platea dictumst.',
          category: 'basket',
          address: '14 rue Voltaire, Kremlin Bicetre 94270, FRANCE',
          date: new Date('2017-06-21'),
          time: '10h30',
          lat: 48.8156781,
          lng: 2.3628608000000213
        }),
        new Event({
          owner: users['Bill Gates']._id,
          participants: ['Bill Gates', 'Albert Einstein'],
          max_participants: 20,
          title: "Rugby de fin d'année",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam risus porta, tincidunt odio consectetur, dapibus ex. Suspendisse auctor fringilla elit vitae bibendum. Etiam vel risus eget nibh imperdiet dapibus. In hac habitasse platea dictumst.',
          category: 'rugby',
          address: '14 rue Voltaire, Kremlin Bicetre 94270, FRANCE',
          date: new Date('2017-12-30'),
          time: '21h',
          lat: 48.8156781,
          lng: 2.3628608000000213
        })
      ];

      let promises = [];
      list.forEach(function(event, i) {
        event.participants = event.participants.map(u => {
          return users[u]._id;
        });
        promises.push(
          Event.update(
            { title: event.title },
            { $setOnInsert: event },
            { upsert: true }
          )
        );
      });

      return Promise.all(promises)
        .then(function(resultSaves) {
          resultSaves.forEach(res => {
            console.log('Evenement', res.upserted ? 'created' : 'ignored');
          });
          return resultSaves;
        })
        .catch(function(err) {
          console.log('ERROR on event promise save :');
          console.log(err);
          console.log('Event: Disconnecting mongoose..');
          mongoose.disconnect();
        });
    });
  }
};
