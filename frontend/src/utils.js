import firebase from 'firebase';

export function isAuthenticated() {
  return firebase.auth().currentUser != null;
}
