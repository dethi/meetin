const Express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const minify = require('express-minify');
const mongoose = require('mongoose');

const isAuthenticated = require('./middlewares/isAuthenticated');
const createUserIfNotExist = require('./middlewares/createUserIfNotExist');
const events = require('./controllers/event');
const users = require('./controllers/user');
const matchs = require('./controllers/match');

const app = Express();
app.use(bodyParser.json());
app.use(minify());
app.use(isAuthenticated);
app.use(createUserIfNotExist);

/* GET event icons list */
app.get('/event/icon', events.listAllIcon);

/* GET list of users */
app.get('/user', users.listAll);
/* GET user informations */
app.get('/user/:uid', users.getInfosById);

/* GET user informations */
app.get('/me/infos', users.getOwnInfos);
/* POST user informations */
app.post('/me/infos', users.updateOwnInfos);
/* GET user events */
app.get('/me/events', events.getOwnEvents);
/* GET user match history */
app.get('/me/history', users.getOwnHistory);

/* GET all events */
app.post('/event/new', events.createEvent);
/* GET event by id */
app.get('/event/:id', events.getEventById);
/* GET all events */
app.get('/event', events.listAllEvents);

app.get('/match/suggest', matchs.suggestMatch);
app.post('/match/new', matchs.newMatch);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/meetin', function(err) {
  if (err) throw err;
  app.listen(4242);
});
