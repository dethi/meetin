import firebase from 'firebase';
import axios from 'axios';

import store from './store';
import appAction from './actions/app';
import userAction from './actions/user';
import { getOwnInfos } from './api';

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
firebase.auth().onIdTokenChanged(user => {
  if (user) {
    user.getIdToken().then(token => {
      axios.defaults.headers.common['X-Token'] = token;

      getOwnInfos().then(user => {
        store.dispatch(userAction.login(user));
      });
    });
  } else {
    axios.defaults.headers.common['X-Token'] = null;
    store.dispatch(userAction.logout());
  }

  if (loading) {
    loading = false;
    store.dispatch(appAction.ready());
  }
});

export function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
}

export function loginWithFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
}

export function logout() {
  return firebase.auth().signOut();
}
