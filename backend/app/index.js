const Express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const minify = require('express-minify');
const mongoose = require('mongoose');
const cors = require('cors');

const isAuthenticated = require('./middlewares/isAuthenticated');
const createUserIfNotExist = require('./middlewares/createUserIfNotExist');
const events = require('./controllers/event');
const users = require('./controllers/user');
const matchs = require('./controllers/match');

const app = Express();
app.use(cors());
app.use(bodyParser.json());
app.use(minify());
app.use(isAuthenticated);
app.use(createUserIfNotExist);

/* GET event icons list */
app.get('/api/event/icon', events.listAllIcon);

/* GET list of users */
app.get('/api/user', users.listAll);
/* GET user informations */
app.get('/api/user/:uid', users.getInfosById);

/* GET user informations */
app.get('/api/me/infos', users.getOwnInfos);
/* POST user informations */
app.post('/api/me/infos', users.updateOwnInfos);
/* GET user events */
app.get('/api/me/events', events.getOwnEvents);
/* GET user match history */
app.get('/api/me/history', users.getOwnHistory);

/* POST create new event */
app.post('/api/event/new', events.createEvent);
/* Suscribe to event by id */
app.get('/api/event/:id/suscribe', events.subscribeById);
/* Unsuscribe to event by id */
app.get('/api/event/:id/unsuscribe', events.unsubscribeById);
/* GET event by id */
app.get('/api/event/:id', events.getEventById);
/* GET all events */
app.get('/api/event', events.listAllEvents);

/* GET match suggestion */
app.get('/api/match/suggest', matchs.suggestMatch);
/* POST a new match */
app.post('/api/match/new', matchs.newMatch);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, function(err) {
  if (err) throw err;
  app.listen(4242);
});
