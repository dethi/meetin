/* Event controller */

var mongoose = require('mongoose');
var Event = require('../models/event');

module.exports = {
  listAllIcon: (req, res) => {
    return res.json(['foot', 'marc', 'jean']);
  },

  listAllEvents: (req, res) => {
    Event.find({})
      .then(data => {
        return res.json(data);
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

  getEventById: (req, res) => {
    Event.findById(req.params.id)
      .populate('owner')
      .populate('participants')
      .then(data => {
        return res.json(data);
      })
      .catch(error => {
        console.error(error);
        return res.sendStatus(500);
      });
  },

  createEvent: (req, res) => {
    // FIXME: save new event
  }
};
