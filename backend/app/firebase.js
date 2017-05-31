var admin = require('firebase-admin');

var serviceAccount = require('../config/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://jsproject-34dfd.firebaseio.com'
});

module.exports = admin;
