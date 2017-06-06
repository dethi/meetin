/* User controller */

var mongoose = require('mongoose');
var User = require('../models/user');
var History = require('../models/history');
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
    console.log(req.params.uid);
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
    let userTmp = req.user;
    // Update user infos
    for (prop in req.body) {
      if (prop in req.body && prop in userTmp) {
        userTmp[prop] = req.body[prop];
      }
    }

    userTmp
      .save()
      .then(user => {
        return res.json(user);
      })
      .catch(error => {
        console.error(error);
        return res.sendStatus(500);
      });
  },

  getOwnEvents: (req, res) => {
    Event.find({ user_id: req.uid })
      .then(data => {
        return res.json(data);
      })
      .catch(error => {
        console.error(error);
        return res.sendStatus(500);
      });
  },

  getOwnHistory: (req, res) => {
    // FIXME: remove this when fixed
    User.find({ uid: { $ne: req.user.uid } }, null, {
      sort: { displayName: 1 }
    })
      .then(data => {
        return res.json(data);
      })
      .catch(error => {
        console.error(error);
        return res.sendStatus(500);
      });

    /*
    History.find({ user_id: req.uid })
      .then(data => {
        return res.json(data);
      })
      .catch(error => {
        console.error(error);
        return res.sendStatus(500);
      });
      */
  }
};
