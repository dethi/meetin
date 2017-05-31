/* User controller */

var mongoose = require('mongoose');
var User = require('../models/user');
var History = require('../models/history');

module.exports = {
  listAll: (req, res) => {
    User.find({})
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

  getOwnEvents: (req, res) => {
    // FIXME: Switch this to own id
    const userId = '592f2e4afc11a6a06aeb7f10';
    res.json([
      {
        name: '',
        description: ''
      }
    ]);
  },

  getOwnHistory: (req, res) => {
    History.find({ user_id: req.uid })
      .then(data => {
        return res.json(data);
      })
      .catch(error => {
        console.error(error);
        return res.sendStatus(500);
      });
  }
};
