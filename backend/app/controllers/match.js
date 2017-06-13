/* Discover controller */

var mongoose = require('mongoose');
var User = require('../models/user');
var Match = require('../models/match');

var webpush = require('web-push');

const vapidKeys = {
  privateKey: 'xv3jSs-lwXZs8DPovt4VRdo7sW8j3MtMT1XvGcWCpN8',
  publicKey:
    'BKeQqS-JVK5I7S0Loeraz8aj3slLVdF34LwKAXy5sUH6aLiVDcNqEkaqQPe2mknhW7uQpCTe_fee_V3gHT15wxc'
};

webpush.setVapidDetails(
  'mailto:thibault.deutsch@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

module.exports = {
  newMatch: (req, res) => {
    if (req.body == null || req.body.match_user == null) {
      return res.sendStatus(500);
    }

    User.findById(req.body.match_user)
      .then(user => {
        if (user.pushNotification !== null) {
          webpush.sendNotification(
            user.pushNotification,
            'You have a new match!'
          );
        }
      })
      .catch(err => {
        console.log(err);
      });

    new Match({
      owner: req.user._id,
      match_user: req.body.match_user,
      date: new Date()
    })
      .save()
      .then(obj => {
        return res.sendStatus(200);
      })
      .catch(err => {
        return res.sendStatus(500);
      });
  },

  suggestMatch: (req, res) => {
    Match.find({
      $or: [{ owner: req.user._id }, { match_user: req.user._id }]
    })
      .then(matchs => {
        const allMatchedUser = [
          ...new Set(
            [].concat.apply([], matchs.map(e => [e.owner, e.match_user]))
          ),
          req.user._id
        ];
        return User.find({ _id: { $nin: allMatchedUser } });
      })
      .then(users => {
        return res.json(users[Math.floor(Math.random() * users.length)]);
      })
      .catch(error => {
        console.error(error);
        return res.sendStatus(500);
      });
  }
};
