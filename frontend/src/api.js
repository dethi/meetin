import axios from 'axios';

export function getEventIcon() {
  return axios.get('/event/icons').then(res => res.data).catch(err => null);
}

export function listUsers() {
  return axios.get('/user').then(res => res.data).catch(err => null);
}

export function getUserById(id) {
  return axios.get(`/user/${id}`).then(res => res.data).catch(err => null);
}

export function getOwnInfos() {
  return axios
    .get('/me/infos')
    .then(res => console.log(res.data))
    .catch(err => null);
}

export function getOwnEvents() {
  return axios.get('/me/events').then(res => res.data).catch(err => null);
}

export function getOwnHistory() {
  return axios.get('/me/history').then(res => res.data).catch(err => null);
}
