/* Event controller */

var mongoose = require('mongoose');
var Event = require('../models/event');

module.exports = {
  listAllIcon: (req, res) => {
    return res.json(['foot', 'marc', 'jean']);
  },

  listAllEvents: (req, res) => {
    Event.find({ date: { $gte: new Date() } })
      .sort({ date: 1 })
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
      .sort({ date: -1 })
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
    if (
      req.body == null ||
      req.body.description == null ||
      req.body.max_participants == null ||
      req.body.category == null ||
      req.body.owner == null
    ) {
      return res.sendStatus(500);
    }

    new Event({
      owner: req.body.owner,
      participants: req.body.participants,
      max_participants: req.body.max_participants,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      address: req.body.address,
      date: req.body.date,
      time: req.body.time
    }).save();

    return res.sendStatus(200);
  }
};
