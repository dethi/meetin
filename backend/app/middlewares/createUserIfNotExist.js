/* createUserIfNotExist middleware */

var firebase = require('../firebase.js');
var User = require('../models/user.js');

var createUserIfNotExist = function(req, res, next) {
  User.findOne({ uid: req.uid })
    .then(user => {
      if (user) {
        req.user = user;
        next();
      } else {
        firebase
          .auth()
          .getUser(req.uid)
          .then(firebaseUser => {
            var userTmp = new User({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName,
              photoURL: firebaseUser.photoURL,
              description: '',
              phone: ''
            });
            userTmp
              .save()
              .then(user => {
                req.user = user;
                next();
              })
              .catch(error => {
                console.error(error);
                return res.sendStatus(500);
              });
          })
          .catch(error => {
            console.error(error);
            return res.sendStatus(500);
          });
      }
    })
    .catch(error => {
      console.error(error);
      return res.sendStatus(500);
    });
};

module.exports = createUserIfNotExist;
