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
    Event.find({
      $or: [
        { participants: { $elemMatch: { $eq: req.user._id } } },
        { owner: req.user._id }
      ]
    })
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

  subscribeById: (req, res) => {
    Event.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { participants: req.user._id } }
    )
      .populate('owner')
      .populate('participants')
      .then(u => {
        u.participants.push(req.user);
        return res.json(u);
      })
      .catch(e => {
        console.log(e);
        return res.sendStatus(500);
      });
  },

  unsubscribeById: (req, res) => {
    Event.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { participants: req.user._id } }
    )
      .populate('owner')
      .populate('participants')
      .then(u => {
        u.participants = u.participants.filter(u => u.uid != req.user.uid);
        return res.json(u);
      })
      .catch(e => {
        console.log(e);
        return res.sendStatus(500);
      });
  },

  createEvent: (req, res) => {
    if (
      req.body == null ||
      req.body.description == null ||
      req.body.max_participants == null ||
      req.body.category == null ||
      req.body.owner == null ||
      req.body.address == null ||
      req.body.lng == null ||
      req.body.lat == null
    ) {
      return res.sendStatus(500);
    }

    new Event({
      owner: req.body.owner,
      participants: [req.user._id],
      max_participants: req.body.max_participants,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      address: req.body.address,
      date: req.body.date,
      time: req.body.time,
      lat: req.body.lat,
      lng: req.body.lng
    }).save();

    return res.sendStatus(200);
  }
};
