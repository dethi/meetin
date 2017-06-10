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
  return axios.get('/me/infos').then(res => res.data).catch(err => null);
}

export function getOwnHistory() {
  return axios.get('/me/history').then(res => res.data).catch(err => null);
}

export function getOwnEvents() {
  return axios.get('/me/events').then(res => res.data).catch(err => null);
}

export function listEvents() {
  return axios.get('/event').then(res => res.data).catch(err => null);
}

export function getEventById(id) {
  return axios.get(`/event/${id}`).then(res => res.data).catch(err => null);
}

export function updateProfil(infos) {
  return axios
    .post('/me/infos', infos)
    .then(res => {
      return res.status === 200;
    })
    .catch(err => {
      return false;
    });
}

export function addEvent(id, json) {
  return axios
    .post('/event/new', {
      ...json,
      owner: id,
      time: json.hour + 'H' + json.minutes
    })
    .then(res => {
      return res.status === 200;
    })
    .catch(err => {
      return false;
    });
}

export function addMatch(matchedId) {
  return axios
    .post('/match/new', { match_user: matchedId })
    .then(res => {
      return res.status === 200;
    })
    .catch(err => {
      return false;
    });
}

export function getMatchSuggest() {
  return axios.get('/match/suggest').then(res => res.data).catch(err => null);
}
