import firebase from 'firebase';
import store from './store';
import appAction from './actions/app';
import userAction from './actions/user';
import axios from 'axios';

const config = {
  apiKey: 'AIzaSyCr5XQgRPaTD6WDJtbXREwGNMLF_lyrxKo',
  authDomain: 'jsproject-34dfd.firebaseapp.com',
  databaseURL: 'https://jsproject-34dfd.firebaseio.com',
  projectId: 'jsproject-34dfd',
  storageBucket: 'jsproject-34dfd.appspot.com',
  messagingSenderId: '303524053697'
};

firebase.initializeApp(config);

let loading = true;
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const { uid, displayName, photoURL, email } = user;
    store.dispatch(userAction.login({ uid, displayName, photoURL, email }));
  } else {
    store.dispatch(userAction.logout());
  }

  if (loading) {
    loading = false;
    store.dispatch(appAction.ready());
  }
});

firebase.auth().onIdTokenChanged(user => {
  if (user) {
    user.getIdToken().then(token => {
      axios.defaults.headers.common['X-Token'] = token;
    });
  } else {
    axios.defaults.headers.common['X-Token'] = null;
  }
});

export function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
}
