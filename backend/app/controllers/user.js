/* User controller */

var mongoose = require('mongoose');
var User = require('../models/user');

module.exports = {
  listAll: (req, res) => {
    User.find({}, function(err, data) {
      res.json(data);
      console.log('>>>> ' + data);
    });
    /*
    res.json([
      {
        name: 'tom'
      },
      {
        name: 'marc'
      },
      {
        name: 'jean'
      }
    ]);
    */
  },

  getInfosById: (req, res) => {
    res.json({
      name: '',
      description: ''
    });
  },

  getOwnInfos: (req, res) => {
    res.json({
      name: '',
      description: ''
    });
  },

  getOwnEvents: (req, res) => {
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
