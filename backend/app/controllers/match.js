/* Discover controller */

var mongoose = require('mongoose');
var User = require('../models/user');
var Match = require('../models/match');

module.exports = {
  newMatch: (req, res) => {
    if (
      req.body == null ||
      req.body.owner == null ||
      req.body.match_user == null
    ) {
      return res.sendStatus(500);
    }

    if (req.user.uid !== req.body.owner) {
      return res.sendStatus(403);
    }

    new Match({
      owner: req.body.owner,
      match_user: req.body.match_user,
      date: new Date()
    })
      .save()
      .then(() => {
        return res.sendStatus(200);
      })
      .catch(() => {
        return res.sendStatus(500);
      });
  },

  suggestMatch: (req, res) => {
    Match.find({
      $or: [{ owner: req.user.uid }, { match_user: req.user.uid }],
      selected: false
    })
      .then(matchs => {
        const allMatchedUser = matchs.reduce((acc, m) => {
          return acc.append(m.owner === req.user.uid ? m.match_user : m.owner);
        }, []);

        return User.find({ uid: { $nin: allMatchedUser } });
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
