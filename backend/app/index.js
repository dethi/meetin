const Express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const minify = require('express-minify');
var mongoose = require('mongoose');

const events = require('./controllers/event');
const users = require('./controllers/user');

const app = Express();
app.use(bodyParser.json());
app.use(minify());

/* GET event icons list */
app.get('/event/icons', events.listAllIcon);

/* GET list of users */
app.get('/users', users.listAll);
/* GET user informations */
app.get('/user/:id', users.getInfosById);

/* POST update user informations */
app.post('/me/infos', users.getOwnInfos);
/* GET user events */
app.get('/me/events', users.getOwnEvents);
/* GET user match history */
app.get('/me/history', users.getOwnHistory);

mongoose.connect('mongodb://127.0.0.1:27017/meetin', function(err) {
  if (err) throw err;
  app.listen(4242);
});
