const mongoose = require('mongoose');
var User = require('./../models/user');

module.exports = {
  populateUsers: () => {
    var list = [
      new User({
        uid: '45678OKNBDRYUIKNGF5678IJHGFE56UI',
        email: 'steve@apple.com',
        displayName: 'Steeve Jobs',
        photoURL:
          'http://smallthings.fr/wp-content/uploads/2015/05/SteveJobs2.jpg',
        description: '',
        phone: ''
      }),
      new User({
        uid: '56788765RFGHU65678IHVFDE3456789IHB',
        email: 'mark@facebook.com',
        displayName: 'Mark Zuckerberg',
        photoURL:
          'https://res.cloudinary.com/crunchbase-production/image/upload/v1448830269/gzcifut4c2xah95x0ewd.jpg',
        description: '',
        phone: ''
      }),
      new User({
        uid: '98765RFHJ76RFJI765RDCVBJI765',
        email: 'bill@microsoft.com',
        displayName: 'Bill Gates',
        photoURL:
          'http://www.jobat.be/uploadedImages/pictures/3391-1-fr-medium.jpeg',
        description: '',
        phone: ''
      }),
      new User({
        uid: '98765RFHJ76RFJI765RDCVBJI765',
        email: 'admin@albert.com',
        displayName: 'Albert Einstein',
        photoURL:
          'http://www.reussite-personnelle.fr/wp-content/uploads/2015/03/Einstein.jpg',
        description: '',
        phone: ''
      })
    ];

    let promises = [];
    list.forEach(function(user, i) {
      user.uid += i;
      promises.push(
        User.update({ uid: user.uid }, { $setOnInsert: user }, { upsert: true })
      );
    });

    return Promise.all(promises)
      .then(function(resultSaves) {
        resultSaves.forEach(res => {
          console.log('User', res.upserted ? 'created' : 'ignored');
        });

        return resultSaves;
      })
      .catch(function(err) {
        console.log('ERROR on user promise save :');
        console.log(err);
        console.log('User: Disconnecting mongoose..');
        mongoose.disconnect();
      });
  }
};
