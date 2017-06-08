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
    new Event({
      owner: req.body.uid,
      participants: req.body.participants,
      max_participants: req.body.max_participants,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      address: req.body.address,
      date: req.body.date,
      time: req.body.time
    }).save();
  }
};
