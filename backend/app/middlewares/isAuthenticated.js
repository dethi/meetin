/* Firebase Auth middleware */

var firebase = require('../firebase.js');

var isAuthenticated = function(req, res, next) {
  const tokenId = req.get('X-TOKEN') || '';
  firebase
    .auth()
    .verifyIdToken(tokenId)
    .then(function(decodedToken) {
      req.uid = decodedToken.uid;
      next();
    })
    .catch(function(error) {
      return res.sendStatus(401);
    });
};

module.exports = isAuthenticated;
