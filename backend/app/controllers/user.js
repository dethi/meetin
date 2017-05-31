/* User controller */

var mongoose = require('mongoose');
var User = require('../models/user');

module.exports = {
  listAll: (req, res) => {
    User.find({}, function(err, data) {
      res.json(data);
    });
  },

  getInfosById: (req, res) => {
    User.findOne({ uid: req.params.uid }, function(err, data) {
      res.json(data);
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
    res.json([
      {
        name: '',
        description: ''
      }
    ]);
  }
};
