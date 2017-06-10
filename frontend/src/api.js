import axios from 'axios';

// FIXME: is this usefull ?
export function getEventIcon() {
  return axios.get('/api/event/icons').then(res => res.data).catch(err => null);
}

export function listUsers() {
  return axios.get('/api/user').then(res => res.data).catch(err => null);
}

export function getUserById(id) {
  return axios.get(`/api/user/${id}`).then(res => res.data).catch(err => null);
}

export function getOwnInfos() {
  return axios.get('/api/me/infos').then(res => res.data).catch(err => null);
}

export function getOwnHistory() {
  return axios.get('/api/me/history').then(res => res.data).catch(err => null);
}

export function getOwnEvents() {
  return axios.get('/api/me/events').then(res => res.data).catch(err => null);
}

export function listEvents() {
  return axios.get('/api/event').then(res => res.data).catch(err => null);
}

export function getEventById(id) {
  return axios.get(`/api/event/${id}`).then(res => res.data).catch(err => null);
}

export function suscribeById(id) {
  return axios
    .get(`/api/event/${id}/suscribe`)
    .then(res => res.data)
    .catch(err => null);
}

export function unsuscribeById(id) {
  return axios
    .get(`/api/event/${id}/unsuscribe`)
    .then(res => res.data)
    .catch(err => null);
}

export function updateProfil(infos) {
  return axios
    .post('/api/me/infos', infos)
    .then(res => {
      return res.status === 200;
    })
    .catch(err => {
      return false;
    });
}

export function addEvent(id, json) {
  return axios
    .post('/api/event/new', {
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
    .post('/api/match/new', { match_user: matchedId })
    .then(res => {
      return res.status === 200;
    })
    .catch(err => {
      return false;
    });
}

export function getMatchSuggest() {
  return axios
    .get('/api/match/suggest')
    .then(res => res.data)
    .catch(err => null);
}
