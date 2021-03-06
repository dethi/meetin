/* User controller */

var mongoose = require('mongoose');
var User = require('../models/user');
var Match = require('../models/match');
var Event = require('../models/event');

module.exports = {
  listAll: (req, res) => {
    User.find({}, null, { sort: { displayName: 1 } })
      .then(data => {
        return res.json(data);
      })
      .catch(error => {
        console.error(error);
        return res.sendStatus(500);
      });
  },

  getInfosById: (req, res) => {
    User.findOne({ uid: req.params.uid })
      .then(data => {
        return res.json(data);
      })
      .catch(error => {
        console.error(error);
        return res.sendStatus(500);
      });
  },

  getOwnInfos: (req, res) => {
    return res.json(req.user);
  },

  updateOwnInfos: (req, res) => {
    User.findOneAndUpdate(
      { uid: req.user.uid },
      { $set: req.body },
      { new: false }
    )
      .then(user => {
        return res.json(user);
      })
      .catch(error => {
        console.error(error);
        return res.sendStatus(500);
      });
  },

  getOwnHistory: (req, res) => {
    Match.find({
      $or: [{ owner: req.user._id }, { match_user: req.user._id }]
    })
      .then(matchs => {
        const allMatchedUser = new Set(
          [].concat.apply([], matchs.map(e => [e.owner, e.match_user]))
        );

        return User.find({
          $and: [
            { _id: { $ne: req.user._id } },
            { _id: { $in: [...allMatchedUser] } }
          ]
        });
      })
      .then(users => {
        return res.json(users);
      })
      .catch(error => {
        return res.sendStatus(500);
      });
  },

  updatePushNotification: (req, res) => {
    User.findOneAndUpdate(
      { uid: req.user.uid },
      { $set: req.body },
      { new: false }
    )
      .then(user => {
        return res.json(user);
      })
      .catch(error => {
        console.error(error);
        return res.sendStatus(500);
      });
  }
};
