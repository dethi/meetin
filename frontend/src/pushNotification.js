import store from './store';
import appAction from './actions/app';
import { updatePushNotification } from './api';

const applicationServerPublicKey =
  'BKeQqS-JVK5I7S0Loeraz8aj3slLVdF34LwKAXy5sUH6aLiVDcNqEkaqQPe2mknhW7uQpCTe_fee_V3gHT15wxc';

let swInitialized = false;
let swRegistration = null;

store.subscribe(() => {
  const state = store.getState();
  if (!swInitialized && state.app.appReady && state.app.swReady) {
    swInitialized = true;

    swRegistration.pushManager.getSubscription().then(function(subscription) {
      const isSubscribed = !(subscription === null);
      updatePushNotification(isSubscribed);

      if (isSubscribed) {
        console.log('User IS subscribed.');
      } else {
        console.log('User is NOT subscribed.');
      }
    });
  }
});

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export function subscribeUser() {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    })
    .then(subscription => {
      console.log('User is subscribed.');
      updatePushNotification(subscription);
    })
    .catch(err => {
      console.log('Failed to subscribe the user: ', err);
    });
}

export function unsubscribeUser() {
  swRegistration.pushManager
    .getSubscription()
    .then(subscription => {
      if (subscription) {
        return subscription.unsubscribe();
      }
    })
    .catch(error => {
      console.log('Error unsubscribing', error);
    })
    .then(() => {
      updatePushNotification(null);
      console.log('User is unsubscribed.');
    });
}

export function register() {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
      navigator.serviceWorker
        .register(swUrl)
        .then(swReg => {
          console.log('Service Worker is registered', swReg);
          swRegistration = swReg;
          store.dispatch(appAction.swReady());
        })
        .catch(error => {
          console.error('Error during service worker registration:', error);
        });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

export default {
  register,
  unregister,
  subscribeUser,
  unsubscribeUser
};
