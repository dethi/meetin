const Express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const minify = require('express-minify');

const events = require('./controllers/events');
const users = require('./controllers/users');

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

app.listen(4242);
